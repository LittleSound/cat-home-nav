<script lang="ts" setup>import { computed, toRefs } from 'vue'
import DefaultImg from '../Default/Img.vue'

const props = defineProps<{
  data: Config['apps'][number]
}>()
const { data } = toRefs(props)
const imgStyle = computed(() => ({
  height: data.value.iconSize || '80%',
  width: data.value.iconSize || '80%',
}))
const iconBox = computed(() => ({
  background: data.value.themeColor || '#fff',
}))

const url = computed(
  () => (data.value.host.indexOf('http') === 0
    ? data.value.host
    : `http://${data.value.host}`
  ),
)
</script>

<template>
  <div class="app-card">
    <a class="card-main" :href="url">
      <div :style="iconBox" class="app-icon" :title="data.desp">
        <DefaultImg :style="imgStyle" :src="props.data.iconUrl" :alt="data.name + ' ICON'" />
      </div>
      <div class="app-name overflow-omit">
        <p :title="data.desp">
          {{ data.name }}
        </p>
      </div>
    </a>
  </div>
</template>

<style lang="css" scoped>
a {
  text-decoration: none;
}

.overflow-omit {
  display: -webkit-box;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.app-card {
  display: flex;
  justify-content: center;
  align-items: center;

  & .card-main {
    align-items: center;
    flex-direction: column;
    display: flex;
    cursor: pointer;

    & .app-icon {
      width: 60px;
      height: 60px;
      overflow: hidden;
      box-shadow: rgba(168, 182, 191, 0.6) 0 1px 2px 0;
      border-radius: 22%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.25s ease-out;

      & img {
        object-fit: contain;
      }
    }

    & .app-name {
      font-size: 12px;
      line-height: 20px;
      margin: 8px 0 0 0;
      color: #202020;
      font-weight: 500;
    }

    &:hover {
      & .app-icon {
        box-shadow: rgba(168, 182, 191, 0.6) 0 8px 15px 0;
        transform: translateY(-1px);
      }
    }

    &:active {
      & .app-icon {
        box-shadow: rgba(168, 182, 191, 0.6) 0 1px 2px 0;
        transform: translateY(0);
        transition: all 0.02s ease-out;
      }
    }
  }
}

@media (min-width: 768px) {
  .app-card {
    & .card-main {
      & .app-icon {
        width: 80px;
        height: 80px;
      }

      & .app-name {
        font-size: 14px;
      }
    }
  }
}

@media (min-width: 1280px) {
  .app-card {
    & .card-main {
      & .app-icon {
        width: 100px;
        height: 100px;
      }

      & .app-name {
        /* font-size: 14px; */
      }
    }
  }
}

@media (min-width: 1800px) {
  /* CODE */
}
</style>
