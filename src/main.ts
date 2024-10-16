import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import { en, zhHans } from 'vuetify/locale'

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'zhHans',
    fallback: 'zhHans',
    messages: { zhHans, en },
  },
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
  },
  defaults: {
    VApp: {
      style: 'padding:0;margin:0; width:100vw',
    },
    VMain: {
      style: 'margin:0 auto; margin-bottom:200px;max-width:1110px;',
    },
  },
})

createApp(App).use(vuetify).mount('#app')
