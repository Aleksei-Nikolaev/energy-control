<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = ref([
  {
    label: 'Блок 1',
    route: '/block1'
  },  {
    label: 'Блок 2',
    route: '/block2',
    disabled: true
  },
  {
    label: 'Блок 3',
    route: '/block3',
    disabled: true
  },
  {
    label: 'Теплосеть',
    route: '/teploset',
    disabled: true
  },
  {
    label: 'Сводка',
    route: '/svodka',
    disabled: true
  },
  {
    label: 'Пуск',
    route: '/pusk',
    disabled: true
  },
  {
    label: 'Архив',
    route: '/archive',
    disabled: true
  }
]);

const activeTab = computed(() => `/${route.params.block}`);
</script>

<template>
  <Tabs :value="activeTab">
    <TabList>
      <Tab class="header__navbar"
        v-ripple
        v-for="tab in items"
        :key="tab.label"
        :value="tab.route"
        as="router-link"
        :to="tab.route"
        :disabled="tab.disabled"
      >
        <span>{{ tab.label }}</span>
      </Tab>
    </TabList>
  </Tabs>
</template>

<style lang="scss">
.header__navbar {
  @include sm {
    font-size: 26px;
  }
}


</style>
