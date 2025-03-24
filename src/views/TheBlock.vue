<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import { RouterView } from 'vue-router'


const fetchLastData = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/last`)
  return data
}

const { data: lastData } = useQuery({
  queryKey: ['lastData'],
  queryFn: fetchLastData,
  refetchInterval: 1000
})



const route = useRoute()


const items = [
  {
    label: 'Турбина',
    route: 'turbine'
  }, {
    label: 'Котел',
    route: 'boiler'
  }
  ]

const activeTab = computed(() => {
  const segments = route.path.split('/').filter(Boolean);
  return segments.pop();
});
</script>

<template>
  <div>
    <nav class="block_navbar">
      <Tabs :value="activeTab">
        <TabList>
          <Tab
            v-ripple
            v-for="tab in items"
            :key="tab.label"
            :value="tab.route"
            as="router-link"
            :to="`${tab.route}`"
          >
            <span>{{ tab.label }}</span>
          </Tab>
        </TabList>
      </Tabs>
    </nav>
    <RouterView :signal="lastData"/>
  </div>
</template>

<style scoped lang="scss">
.block_navbar {
  display: flex;
  margin-bottom: 10px;
}
</style>
