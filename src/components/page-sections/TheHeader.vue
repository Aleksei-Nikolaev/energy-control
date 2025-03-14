<script setup lang="ts">
import {ref} from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()



const items = ref([
  {
    label: 'Котел',
    route: '/boiler'
  },
  {
    label: 'Турбина',
    route: '/turbine'
  }
]);


</script>

<template>
  <Tabs :value="route.path">
    <TabList>
      <Tab
        v-ripple
        v-for="tab in items"
        :key="tab.label"
        :value="tab.route"
        as="router-link"
        :to="tab.route"
      >
        <span>{{ tab.label }}</span>
      </Tab>
    </TabList>
  </Tabs>

</template>

<style lang="scss">



</style>
