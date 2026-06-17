window.tailwind = window.tailwind || {};
window.tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {},
    },
};

// apply the theme state without flashing
(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();