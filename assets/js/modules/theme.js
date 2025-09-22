// Theme Module

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.themes = ['dark', 'light', 'matrix', 'synthwave', 'minimal'];
        this.currentTheme = this.getStoredTheme() || 'dark';

        this.init();
    }

    init() {
        // Apply stored theme
        this.applyTheme(this.currentTheme);

        // Theme toggle button
        this.themeToggle?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!this.getStoredTheme()) {
                    this.applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    toggleTheme() {
        // Simple toggle between dark and light for the button
        // For more themes, use terminal commands
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        this.storeTheme(newTheme);
    }

    applyTheme(theme) {
        if (this.themes.includes(theme)) {
            this.body.dataset.theme = theme;
            this.currentTheme = theme;
            this.updateThemeIcon(theme);
        }
    }

    updateThemeIcon(theme) {
        if (!this.themeToggle) return;

        const icon = this.themeToggle.querySelector('svg');
        if (!icon) return;

        // Update icon based on theme
        if (theme === 'light' || theme === 'minimal') {
            // Show moon icon for light themes
            icon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            `;
        } else {
            // Show sun icon for dark themes
            icon.innerHTML = `
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            `;
        }
    }

    storeTheme(theme) {
        localStorage.setItem('preferred-theme', theme);
    }

    getStoredTheme() {
        return localStorage.getItem('preferred-theme');
    }

    // Method to set theme programmatically (used by terminal commands)
    setTheme(theme) {
        if (this.themes.includes(theme)) {
            this.applyTheme(theme);
            this.storeTheme(theme);
            return true;
        }
        return false;
    }
}

// Export for use in main.js
window.ThemeManager = ThemeManager;