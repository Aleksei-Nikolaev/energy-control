<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/page-sections/TheHeader.vue'


document.documentElement.classList.add('my-app-dark')

</script>

<template>
  <div class="content">
    <header>
      <TheHeader />
    </header>
    <RouterView  />
  </div>
</template>

<style lang="scss">
.content {
  width: 1400px;
  margin: 0 auto;
  padding: 34px 60px;
}

header {
  display: flex;
  margin-bottom: 10px;
}
</style>
