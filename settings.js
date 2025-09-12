function saveProfile() {
  const id = document.getElementById('adminID').value;
  const name = document.getElementById('adminName').value;
  const email = document.getElementById('adminEmail').value;
  alert(`Profile saved!\nAdmin ID: ${id}\nName: ${name}\nEmail: ${email}`);
}

function updatePassword() {
  const oldPass = document.getElementById('oldPassword').value;
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;

  if(newPass !== confirmPass) {
    alert("New password and confirm password do not match!");
    return;
  }

  alert("Password updated successfully!");
}

function deleteAccount() {
  const confirmed = confirm("Are you sure you want to delete this account? This action cannot be undone!");
  if(confirmed) { alert("Account deleted!"); }
}

// Toggle Password Card
function togglePasswordCard() {
  const card = document.querySelector('.password-card');
  card.style.display = card.style.display === 'none' ? 'block' : 'none';
}
