// Simple dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('darkmode-toggle');
    btn.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      localStorage.setItem('darkmode', document.body.classList.contains('dark'));
    });
    // Load preference
    if (localStorage.getItem('darkmode') === 'true') {
      document.body.classList.add('dark');
    }
  });
  