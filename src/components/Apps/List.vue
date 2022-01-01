<script lang="ts" setup>
import axios, { AxiosResponse } from 'axios'
import { reactive, readonly, watch } from 'vue'
import AppCard from './Card.vue'

const list = ((ret = reactive({
  value: [] as Config['apps'],
  loading: true,
  error: undefined as unknown,
})) => {
  (async() => {
    try {
      ret.loading = true
      const res = await axios.get<Config>('/config.json')
      ret.value = res.data?.apps
      ret.error = undefined
    }
    catch (error) {
      console.error('err', error)
      ret.error = error
    }
    finally {
      ret.loading = false
    }
  })()

  return readonly(ret)
})()

// eslint-disable-next-line no-console
watch(() => list.value, () => void console.log('App List', list.value))
</script>
<template>
  <p v-if="list.error">
    {{ list.error || '未知错误' }}
  </p>
  <div class="app-list">
    <AppCard v-for="item of list.value" :key="item.name" :data="item" class="app-list-card" />
  </div>
</template>

<style>
p {
  margin: 0;
}

.app-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 24px 8px;
}

@media (min-width: 1024px) {
  .app-list {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .app-list {
    grid-gap: 40px 20px;
  }
}

@media (min-width: 1800px) {
  .app-list {
    grid-gap: 80px 20px;
  }
}
</style>
