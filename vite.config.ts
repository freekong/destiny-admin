import { defineConfig } from 'vite'
import path from 'node:path'
import { setupVitePlugins } from './build'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve("./src"),
      '~': path.resolve(process.cwd())
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/common/global.scss" as *;`,
      }
    }
  },
  server: {
    host: '192.168.1.13',
    port: 5200,
    open: true,
    proxy: {
      '/v1': {
        target: 'http://192.168.1.219:80',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, '/v1'),
      }
    }
  },
  plugins: setupVitePlugins(),
})
