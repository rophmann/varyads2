import { createStore } from 'vuex'

export default createStore({
   state: {
      locale: 'ru',
      titleKey: ''
   },
   getters: {
      getLocale: (store) => store.locale,
      getTitleKey: (store) => store.titleKey
   },
   mutations: {
      setTitleKey(store, key) {
         store.titleKey = key
      }
   }
})