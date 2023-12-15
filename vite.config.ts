import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'
import { viteMockServe } from 'vite-plugin-mock'
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
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
  plugins: [
    vue(),
    Unocss({ // 使用Unocss
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: 'src/typings/components.d.ts'
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg-icon')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    viteMockServe({
      mockPath: 'mock',
      prodEnabled: true,
      injectCode: `
        import { setupMockServer } from '../mock';
        setupMockServer();
      `
    })
  ],
})
