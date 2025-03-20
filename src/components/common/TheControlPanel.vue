<script setup lang="ts">
import TheIndicators from '@/components/common/control-panel/TheIndicators.vue'
import TheChart from '@/components/common/control-panel/TheChart.vue'
import { computed, ref } from 'vue'
import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'

const props = defineProps<{
  signal?: any
  fields?: string[]
}>()

const shownData = computed(() => {
  if (props.signal) {
    return props.fields.reduce((acc, curr) => {
      acc[curr] = props.signal[curr]?.Valid ? props.signal[curr].V : 'n/d'
      return acc
    }, {})
  }
})

const fetchProps = ref({
  field: props.fields[0],
  interval: 30,
})

const fetchIndicatorArchive = async (fetchParams) => {
  const { field, interval } = fetchParams
  const { data } = await axios.get(`http://localhost:9090/duration/${field}/${interval}`)
  return data
}

const { data: archive } = useQuery({
  queryKey: ['fetchData', fetchProps.value],
  queryFn: () => fetchIndicatorArchive(fetchProps.value),
})

const intervals = ref([
  { name: '30 мин', value: 30 },
  { name: '25 мин', value: 25 },
  { name: '20 мин', value: 20 },
  { name: '15 мин', value: 15 },
  { name: '10 мин', value: 10 },
  { name: '5 мин', value: 5 },
])
</script>

<template>
  <div class="control-panel__wrapper">
    <div class="control-panel__left">
      <TheIndicators v-model="fetchProps.field" :fields="fields" :shown-data="shownData" />
    </div>
    <div class="control-panel__right">
      <TheChart
        v-if="archive && archive.response"
        :archive="archive.response[fetchProps.field]"
        :field="fetchProps.field"
        :interval="fetchProps.interval"
      />
      <Select
        v-model="fetchProps.interval"
        :options="intervals"
        option-label="name"
        option-value="value"
        class="control-panel__right-select"
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
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;

    &-select {
      margin-top: 10px;
      margin-left: auto;
    }
  }
}
</style>
