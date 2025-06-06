document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('darkmode-toggle');
  // Set initial state from localStorage
  if (localStorage.getItem('darkmode') === 'true') {
    document.body.classList.add('dark');
    toggle.checked = true;
    toggle.setAttribute('aria-checked', 'true');
  }
  toggle.addEventListener('change', function() {
    const isDark = toggle.checked;
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('darkmode', isDark);
    toggle.setAttribute('aria-checked', isDark ? 'true' : 'false');
  });
});
