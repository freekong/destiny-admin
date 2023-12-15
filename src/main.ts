import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setuoRouter } from '@/router'
import '@/styles/index.scss'
import '@/styles/element/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:svg-icons-register';
import 'uno.css';

const app = createApp(App)

setupStore(app)
setuoRouter(app)

app.mount('#app')
