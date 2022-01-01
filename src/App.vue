<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import AppList from './components/Apps/List.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="/pwa-512x512.png" /> -->
  <Header msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="app-main">
    <div class="apps">
      <AppList />
    </div>
  </div>
</template>

<style lang="css">

body,
html {
  margin: 0;
  padding: 0;
  min-width: 300px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: all 0.02s ease-out;

  & .app-main {
    margin: 20px 0 0;
    padding: 10px;
    transition: all 0.02s ease-out;
  }
}

@media (min-width: 768px) {
  #app {
    & .app-main {
      max-width: 80%;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

@media (min-width: 1024px) {
  #app {
    & .app-main {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

@media (min-width: 1280px) {
  #app {
    & .app-main {
      margin-left: auto;
      margin-right: auto;
      max-width: 1200px;
    }
  }
}

@media (min-width: 1800px) {
  #app {
    & .app-main {
      margin-top: 55px;
      margin-left: auto;
      margin-right: auto;
      max-width: 1600px;
    }
  }
}

.apps {
  /* background-color: #2c3e50; */
}
</style>
