import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from '@/router'
import { setupI18n } from '@/locales'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import '@/styles/element/index.scss'
import '@/styles/index.scss'
import '@/styles/css/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:svg-icons-register';
import 'uno.css';

async function setupApp() {
  const app = createApp(App)
  
  setupStore(app)
  await setupRouter(app)
  setupI18n(app)
  
  app.use(ElementPlus, {
    size: 'small',
    locale: zhCn,
  })

  app.mount('#app')
}

setupApp()

