import ru from '../languages/ru.json'
import en from '../languages/en.json'
import store from '../store'

const locales = {
   ru,
   en
}

export default function translate(key) {
   const locale = store.getters.getLocale || 'en'
   return locales[locale]?.[key] || 'Error'
}