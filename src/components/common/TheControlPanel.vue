<script setup lang="ts">
import TheIndicators from '@/components/common/control-panel/TheIndicators.vue'
import TheChart from '@/components/common/control-panel/TheChart.vue'
import { computed, ref } from 'vue'
import axios from 'axios'

const props = defineProps<{
  signal?: any
  fields?: string[]
}>()

const isChartData = ref(false)

const fetchData = async (field, time) => {
  isChartData.value = false
  const { data } = await axios.get(`http://localhost:9090/duration/${field}/${time}`)
  return data
}
const initData = ref(null)

fetchData('o2_slev', 30).then((response) => {
  initData.value = response
  isChartData.value = true
})

const shownData = computed(() => {
  if (props.signal) {
    return props.fields.reduce((acc, curr) => {
      acc[curr] = props.signal[curr]?.Valid ? props.signal[curr].V : 'n/d'
      return acc
    }, {})
  }
})

const selectedCategory = ref(props.fields[0])
</script>

<template>
  <div class="control-panel__wrapper">
    <div class="control-panel__left">
      <TheIndicators v-model="selectedCategory" :fields="fields" :shown-data="shownData" />
    </div>
    <div class="control-panel__right">
      <TheChart
        v-if="isChartData"
        :archive="initData.response.o2_slev"
      />
    </div>
  </div>
</template>

<style lang="scss">
.control-panel {
  &__wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  &__left {
    width: 800px;
  }

  &__right {
    width: 400px;
    height: 600px;
  }
}
</style>
