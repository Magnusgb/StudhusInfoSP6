import '@/components/atoms/Buttons/Button.css'
import '@/components/organisms/TopBar/TopBar.css';
import '@/assets/style/style.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
