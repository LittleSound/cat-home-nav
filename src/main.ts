import App from './App.vue'

import { ViteSSG } from 'vite-ssg/single-page'
export const createApp = ViteSSG(App)

// import { createApp } from 'vue'
// createApp(App).mount('#app')


// 在非服务端生成的时候启用 pwa
if (!import.meta.env.SSR) {
    import('./pwa')
}
