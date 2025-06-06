// Animated dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('darkmode-toggle');
  let darkActive = localStorage.getItem('darkmode') === 'true';
  if (darkActive) document.body.classList.add('dark');

  btn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    darkActive = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', darkActive);

    // Animate icon (moon/sun swap)
    btn.textContent = darkActive ? '☀️' : '🌙';
    btn.classList.add('toggle-anim');
    setTimeout(() => btn.classList.remove('toggle-anim'), 400);
  });

  // Set initial icon
  btn.textContent = darkActive ? '☀️' : '🌙';
});

// Optional: Add CSS for button animation
