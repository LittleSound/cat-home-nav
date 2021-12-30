import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // PWA
    VitePWA({
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      registerType: 'autoUpdate',
      manifest: {
        name: '猫窝导航',
        short_name: '猫窝导航',
        description: '导航到猫窝里面的各种设施',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          // 缓存 config.json 的最新版本
          {
            urlPattern: '/config.json',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'navhomecat-config-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
            }
          },
          // 缓存 icons 目录下的图片
          {
            urlPattern: /\/icons\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'navhomecat-icons-cache',
              expiration: {
                maxEntries: 9999,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
            }
          }
        ]
      },
    }),
  ]
})
