import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from '@/router'
import { setupI18n } from '@/locales'
import '@/styles/index.scss'
import '@/styles/css/index.css'
import 'virtual:svg-icons-register';
import 'uno.css';

async function setupApp() {
  const app = createApp(App)
  
  setupStore(app)
  await setupRouter(app)
  setupI18n(app)

  app.mount('#app')
}

setupApp()

