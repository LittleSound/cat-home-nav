<script setup lang="ts">
</script>

<template>
  <header>
    <img class="icon" src="/pwa-512x512.png">
    <h1>猫窝导航</h1>
    <p>
      Meow~
    </p>
  </header>
</template>

<style lang="css" scoped>
header {
  padding: 30px 10px;
  background: #fe77a2;
  color: #760945;
  transition: all 0.02s ease-out;
}

h1 {
  font-size: 24px;
  margin: 10px 0 0;
}

p {
  /* font-weight: bold; */
  font-size: 16px;
  margin: 10px 0 0;
}

.icon {
  width: 120px;
  height: 120px;
  transition: all 0.02s ease-out;
}

@media (min-width: 1280px) {
  header {
    box-shadow: rgba(168, 182, 191, 0.6) 0 1px 2px 0;
    margin-top: 50px;
    border-radius: 25px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 135px;
    height: 135px;
  }
}

@media (min-width: 1800px) {
  header {
    margin-top: 80px;
    max-width: 1600px;
    height: 300px;
    border-radius: 30px;
  }

  .icon {
    width: 145px;
    height: 145px;
  }
}
</style>
