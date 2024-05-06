import '@/components/atoms/buttons/Button.css'
import '@/components/molecules/TopBar/TopBar.css';
import '@/assets/style/style.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
