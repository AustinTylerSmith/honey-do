import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import '@gai/gaig-icons'
import '@gai/gaig-ui-theme'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
