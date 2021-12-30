<script lang="ts" setup>
import axios, { AxiosResponse } from 'axios'
import { reactive, readonly, watch } from "vue";
import AppCard from './Card.vue';

const list = ((ret = reactive({
  value: [] as Config['apps'],
  loading: true,
  error: undefined as unknown,
})) => {
  (async () => {
    try {
      ret.loading = true
      const res = await axios.get<Config>('/config.json')
      ret.value = res.data?.apps
      ret.error = undefined
    } catch (error) {
      console.error('err', error)
      ret.error = error
    } finally {
      ret.loading = false
    }
  })()

  return readonly(ret)
})()

watch(() => list.value, () => void console.log('App List', list.value))
</script>
<template>
  <p>{{ list.error || 'Normal' }}</p>
  <AppCard v-for="item of list.value" :key="item.name" :data="item" />
</template>
