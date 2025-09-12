// Bar Chart - Issues Reported by Area
const ctxArea = document.getElementById('areaChart').getContext('2d');
new Chart(ctxArea, {
  type: 'bar',
  data: {
    labels: ['Downtown', 'Suburb', 'East Side', 'West End', 'Old Town'],
    datasets: [{
      label: 'Issues',
      data: [320, 210, 150, 90, 75],
      backgroundColor: '#1e90ff',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 50 } }
    }
  }
});

// Pie Chart - Issues by Category
const ctxCategory = document.getElementById('categoryChart').getContext('2d');
new Chart(ctxCategory, {
  type: 'pie',
  data: {
    labels: ['Garbage', 'Potholes', 'Streetlights', 'Water', 'Others'],
    datasets: [{
      data: [400, 250, 180, 100, 70],
      backgroundColor: ['#1e90ff', '#ff6b6b', '#ffa502', '#2ed573', '#3742fa']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  }
});

// Doughnut Chart - Resolution Performance
const ctxResolution = document.getElementById('resolutionChart').getContext('2d');
new Chart(ctxResolution, {
  type: 'doughnut',
  data: {
    labels: ['Resolved', 'Active'],
    datasets: [{
      data: [860, 320],
      backgroundColor: ['#2ed573', '#ffa502']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom' } },
    cutout: '70%'
  }
});
