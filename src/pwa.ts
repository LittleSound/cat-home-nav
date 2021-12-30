import { registerSW } from 'virtual:pwa-register'

/** Service Worker 更新间隔 */
const intervalMS = 1000 * 10

registerSW({
  immediate: true,
  onRegistered(r) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
})
