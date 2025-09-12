const users = [
  { name: "Sophia Clark", email: "sophia.clark@email.com", issues: 15, status: "active" },
  { name: "Ethan Bennett", email: "ethan.bennett@email.com", issues: 8, status: "active" },
  { name: "Olivia Hayes", email: "olivia.hayes@email.com", issues: 22, status: "blocked" },
  { name: "Liam Foster", email: "liam.foster@email.com", issues: 5, status: "active" }
];

const activities = [
  "Olivia Hayes reported an issue",
  "Sophia Clark was blocked",
  "Ethan Bennett reported an issue",
  "Liam Foster updated profile"
];

function getFilteredUsers() {
  let filtered = [...users];
  const status = document.getElementById('status-filter').value;
  const search = document.getElementById('search-input').value.trim().toLowerCase();
  if (status !== "all") filtered = filtered.filter(u => u.status === status);
  if (search.length) filtered = filtered.filter(u =>
    u.name.toLowerCase().includes(search) || u.email.toLowerCase().includes(search)
  );
  return filtered;
}

function renderTable() {
  const tableBody = document.getElementById('users-table-body');
  tableBody.innerHTML = '';
  const filteredUsers = getFilteredUsers();

  filteredUsers.forEach((user, idx) => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    const avatar = document.createElement('span');
    avatar.className = 'user-avatar';
    avatar.textContent = user.name.charAt(0);
    tdName.appendChild(avatar);
    tdName.appendChild(document.createTextNode(user.name));

    const tdEmail = document.createElement('td');
    tdEmail.textContent = user.email;

    const tdIssues = document.createElement('td');
    tdIssues.textContent = user.issues;

  // Status column removed

    const tdActions = document.createElement('td');
    const viewBtn = document.createElement('button');
    viewBtn.textContent = "View";
    viewBtn.className = "action-btn view-btn";
    tdActions.appendChild(viewBtn);

    if (user.status === "active") {
      const verifiedBtn = document.createElement('button');
      verifiedBtn.textContent = "Verified";
      verifiedBtn.className = "action-btn unblock-btn";
      verifiedBtn.onclick = () => changeStatus(idx, "blocked");
      tdActions.appendChild(verifiedBtn);
    } else {
      const verifyBtn = document.createElement('button');
      verifyBtn.textContent = "Verify";
      verifyBtn.className = "action-btn block-btn";
      verifyBtn.onclick = () => changeStatus(idx, "active");
      tdActions.appendChild(verifyBtn);
    }

  tr.append(tdName, tdEmail, tdIssues, tdActions);
    tableBody.appendChild(tr);
  });

  document.getElementById('pagination-info').textContent =
    `Showing 1 to ${filteredUsers.length} of ${users.length} results`;
}

function changeStatus(idx, newStatus) {
  users[idx].status = newStatus;
  renderTable();
  showSnackbar();
}

function showSnackbar() {
  const snackbar = document.getElementById('snackbar');
  snackbar.className = "snackbar show";
  setTimeout(() => { snackbar.className = "snackbar"; }, 2400);
}

function renderActivityFeed() {
  const feed = document.getElementById('activity-feed');
  feed.innerHTML = '';
  activities.forEach(act => {
    const li = document.createElement('li');
    li.textContent = act;
    feed.appendChild(li);
  });
}

function renderChart() {
  const ctx = document.getElementById('topReportersChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Olivia', 'Sophia', 'Ethan', 'Liam'],
      datasets: [{
        label: 'Reported Issues',
        data: [22,15,8,5],
        backgroundColor: '#4f92ff'
      }]
    },
    options: { responsive:true, plugins:{ legend:{ display:false }}, scales:{ y:{ beginAtZero:true } } }
  });
}

document.getElementById('status-filter').addEventListener('change', renderTable);
document.getElementById('search-input').addEventListener('input', renderTable);

window.onload = () => {
  renderTable();
  renderActivityFeed();
  renderChart();
};
