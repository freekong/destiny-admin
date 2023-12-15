import { createPinia } from 'pinia'
import { App } from 'vue';

export function setupStore(app: App) {
  const store = createPinia()

  app.use(store)
}

export * from './modules'