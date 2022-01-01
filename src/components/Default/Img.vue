<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import ImgOffOutline from './ImgOffOutline.vue'

/***
 * 默认 img 组件，带有图片损坏时的默认替换
 */
const props = defineProps({
  /** 图片地址 */
  src: String,
  /** 替代文本 */
  alt: String,
})

const emits = defineEmits<{
  (e: 'onerror', src: string | undefined, alt: string | undefined): void
}>()

/** 0： Ok， 1: Error */
const statusCode = ref(0)
const onError = () => {
  if (statusCode.value) return
  statusCode.value = 1
  emits('onerror', props.src, props.alt)
}
watchEffect(() => statusCode.value = props.src ? 0 : 1)
</script>

<template>
  <img
    v-if="statusCode === 0"
    :src="props.src"
    :alt="alt"
    class="default-img"
    :onerror="onError"
  >
  <div v-else class="default-img-offline">
    <ImgOffOutline />
    <!-- <p v-if="alt" class="overflow-omit">
      {{ alt }}
    </p> -->
  </div>
</template>

<style lang="css" scoped>
.default-img-offline {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fe77a2;
  color: #89064e;

  & svg {
    width: 70%;
    height: 70%;
  }

  & p {
    font-size: 12px;
    margin-top: 5px;
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
