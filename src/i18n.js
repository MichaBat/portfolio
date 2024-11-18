import { createI18n } from 'vue-i18n'

// Import JSON translation files
import en from './locales/en.json'
import nl from './locales/nl.json'

const i18n = createI18n({
  locale: 'nl', // Default language
  fallbackLocale: 'en', // Fallback language
  messages: {
    en,
    nl,
  },
})

export default i18n
