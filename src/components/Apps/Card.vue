<script lang="ts" setup>
const props = defineProps<{
  data: Config['apps'][number]
}>()
</script>
<template>
<div>
  App Name {{ props.data.name }}
  <img :src="props.data.iconUrl" :alt="props.data.name + ' ICON'">
</div>
</template>
