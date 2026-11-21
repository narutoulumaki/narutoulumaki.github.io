/* ==========================================================================
   Minimalist Theme Toggle
   ========================================================================== */

(function () {
    const storageKey = 'bk-theme-preference';
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleLabel = document.getElementById('theme-label');

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
            if (toggleLabel) toggleLabel.textContent = 'Light';
        } else {
            root.removeAttribute('data-theme');
            if (toggleLabel) toggleLabel.textContent = 'Dark';
        }
    }

    // Default to high-contrast light mode unless user explicitly saved dark
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === 'dark') {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const isDark = root.getAttribute('data-theme') === 'dark';
            const nextTheme = isDark ? 'light' : 'dark';
            localStorage.setItem(storageKey, nextTheme);
            applyTheme(nextTheme);
        });
    }
})();
