// Main JavaScript Entry Point

// Load all scripts in order
const scripts = [
    '/assets/js/utils/commands.js',
    '/assets/js/modules/terminal.js',
    '/assets/js/modules/navigation.js',
    '/assets/js/modules/theme.js',
    '/assets/js/modules/stats.js',
    '/assets/js/modules/skills.js',
    '/assets/js/modules/projects.js',
    '/assets/js/modules/i18n.js',
    '/assets/js/modules/easter-eggs.js',
    '/assets/js/modules/animations.js',
    '/assets/js/modules/form.js'
];

// Load scripts sequentially
async function loadScripts() {
    for (const script of scripts) {
        await loadScript(script);
    }
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Initialize all modules after scripts are loaded
async function initializeApp() {
    console.log('Portfolio v1.0.0 - Initializing...');

    // Load scripts
    await loadScripts();

    // Initialize modules
    const terminal = new window.Terminal();
    const navigation = new window.Navigation();
    const themeManager = new window.ThemeManager();
    const statsCounter = new window.StatsCounter();
    const skillsManager = new window.SkillsManager();
    const projectsManager = new window.ProjectsManager();
    const i18nManager = new window.I18nManager();
    const easterEggs = new window.EasterEggs();
    const scrollAnimations = new window.ScrollAnimations();
    const formManager = new window.FormManager();

    // Store instances globally for debugging
    window.app = {
        terminal,
        navigation,
        themeManager,
        statsCounter,
        skillsManager,
        projectsManager,
        i18nManager,
        easterEggs,
        scrollAnimations,
        formManager
    };

    // Add console easter egg
    console.log('%c🎉 Hey there, curious developer!', 'color: #00ff41; font-size: 20px; font-weight: bold;');
    console.log('%cYou found the console! Since you\'re here, you might be interested in the source code.', 'color: #00ff41; font-size: 14px;');
    console.log('%cCheck out the GitHub repo: https://github.com/diogo-costa-silva/webfolio', 'color: #ffb626; font-size: 14px;');
    console.log('%cOr type "hack" in the terminal for some fun! 😉', 'color: #ff5555; font-size: 14px;');

    console.log('Portfolio ready! Type "help" in the terminal for available commands.');
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}