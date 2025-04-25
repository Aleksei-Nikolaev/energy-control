<script setup lang="ts">
import { RouterView } from 'vue-router'
import { TheHeader } from '@/widgets'

document.documentElement.classList.add('my-app-dark')
</script>

<template>
  <div class="content">
    <header>
      <TheHeader class="header" />
    </header>
    <RouterView  />
  </div>
</template>

<style lang="scss">
.content {
  width: 1400px;
  margin: 0 auto;
  padding: 34px 60px;

  @include xl {
    width: 1200px;
    padding: 34px 20px;
  }

  @include lg {
    width: 1000px;
  }
}

.header {
  display: flex;
  margin-bottom: 10px;
}
</style>
