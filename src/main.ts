import { createApp } from 'vue'
import App from './app/App.vue'
import { router } from '@/app/router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import { themePreset } from '@/shared/config/constants/themePreset'
import apiPlugin from '@/app/providers/api/apiPlugin'

const app = createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .use(apiPlugin)
  .use(PrimeVue, {
  theme: {
    preset: themePreset,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})

app.mount('#app')
