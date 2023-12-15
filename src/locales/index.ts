import { createI18n } from 'vue-i18n'

import enLocal from './lang/en'
import zhLocal from './lang/zh-CN'
import type { App } from 'vue'

const messages = {
  english: { ...enLocal },
  chinese: { ...zhLocal }
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'chinese',
  messages
})

export function setupI18n(app: App) {
  app.use(i18n)
}
