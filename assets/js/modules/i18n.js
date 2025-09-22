// Internationalization Module (i18n)

class I18nManager {
    constructor() {
        this.languageToggle = document.getElementById('languageToggle');
        this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.translations = {};
        this.supportedLanguages = ['en-US', 'pt-PT'];

        this.init();
    }

    async init() {
        // Load translations
        await this.loadTranslations();

        // Apply current language
        await this.setLanguage(this.currentLang);

        // Setup language toggle
        this.languageToggle?.addEventListener('click', () => {
            const newLang = this.currentLang === 'en-US' ? 'pt-PT' : 'en-US';
            this.setLanguage(newLang);
        });
    }

    async loadTranslations() {
        for (const lang of this.supportedLanguages) {
            try {
                const response = await fetch(`/locales/${lang}.json`);
                this.translations[lang] = await response.json();
            } catch (error) {
                console.error(`Failed to load ${lang} translations:`, error);
            }
        }
    }

    async setLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) {
            lang = 'en-US';
        }

        this.currentLang = lang;
        this.storeLanguage(lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang.split('-')[0];

        // Update language indicator
        if (this.languageToggle) {
            const indicator = this.languageToggle.querySelector('.lang-indicator');
            if (indicator) {
                indicator.textContent = lang === 'pt-PT' ? 'PT' : 'EN';
            }
        }

        // Apply translations
        this.applyTranslations();
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.getTranslation(key);

            if (translation) {
                // Check if it's an input placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.tagName === 'LABEL') {
                    element.textContent = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update dynamic content
        this.updateDynamicContent();
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return null;
            }
        }

        return value;
    }

    updateDynamicContent() {
        // Update terminal welcome message if needed
        const terminalOutput = document.getElementById('terminalOutput');
        if (terminalOutput && terminalOutput.children.length === 0) {
            // Re-render welcome message in new language
            if (window.app?.terminal) {
                window.app.terminal.clear();
                window.app.terminal.showWelcomeMessage();
            }
        }

        // Update document title
        document.title = this.currentLang === 'pt-PT'
            ? 'Diogo Silva | Portfolio de Desenvolvedor v1.0.0'
            : 'Diogo Silva | Developer Portfolio v1.0.0';
    }

    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;

        // Check if browser language matches Portuguese
        if (browserLang.startsWith('pt')) {
            return 'pt-PT';
        }

        return 'en-US';
    }

    storeLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
    }

    getStoredLanguage() {
        return localStorage.getItem('preferred-language');
    }

    // Method to translate text programmatically
    translate(key) {
        return this.getTranslation(key) || key;
    }
}

// Export for use in main.js
window.I18nManager = I18nManager;