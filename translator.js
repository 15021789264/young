/**
 * Core Translator Utility for Young Project
 * Handles "translate mode" and locale management.
 */

class Translator {
    constructor() {
        this.locales = {};
        this.currentLocale = 'en';
    }

    /**
     * Load translation files
     * @param {string} lang - Language code (en, zh, pt)
     * @param {object} translations - JSON object with translations
     */
    load(lang, translations) {
        this.locales[lang] = translations;
    }

    /**
     * Set the current active language
     * @param {string} lang 
     */
    setLocale(lang) {
        if (this.locales[lang]) {
            this.currentLocale = lang;
            console.log(`Translate Mode: Switched to ${lang}`);
        } else {
            console.warn(`Locale ${lang} not found.`);
        }
    }

    /**
     * Translate a key
     * @param {string} path - Dot notation path (e.g., 'app.title')
     * @returns {string} - Translated string
     */
    t(path) {
        const keys = path.split('.');
        let result = this.locales[this.currentLocale];

        for (const key of keys) {
            if (result[key]) {
                result = result[key];
            } else {
                return path; // Return key if not found
            }
        }
        return result;
    }
}

// Example usage (can be exported as a module)
const translator = new Translator();
export default translator;
