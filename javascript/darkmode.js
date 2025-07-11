const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
    localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    toggle.checked = isDark;
});