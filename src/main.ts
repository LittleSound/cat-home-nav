import { createApp } from 'vue'
import App from './App.vue'



createApp(App).mount('#app')


// 在非服务端生成的时候启用 pwa
if (!import.meta.env.SSR) {
    import('./pwa')
}
