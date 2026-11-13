# young
young project

## Translate Mode (i18n)
This project now supports multiple languages. 

### Supported Locales:
- English (`en`)
- Chinese (`zh`)
- Portuguese (`pt`)

### How to use:
1. Import the translator: `import translator from './translator.js'`.
2. Set the language: `translator.setLocale('pt')`.
3. Get a translation: `translator.t('app.welcome')`.

To add a new language, create a new JSON file in the `locales/` directory and load it into the translator.
