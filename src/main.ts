import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import tooltip from '@/directives/tooltip.js'
import "@/styling/tooltip.css"

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.directive('tooltip', tooltip);

app.mount('#app')
