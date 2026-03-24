const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Simple logic to swap colors or icons
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});