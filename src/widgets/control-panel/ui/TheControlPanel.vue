<script setup lang="ts">
import TheIndicators from '@/widgets/control-panel/ui/TheIndicators.vue'
import TheChart from '@/widgets/control-panel/ui/TheChart.vue'
import { useControlPanel } from '@/widgets/control-panel/model/useControlPanel'
import { ControlPanelProps } from '@/widgets/control-panel/types/ControlPanelProps'
import { useQuery } from '@tanstack/vue-query'
import { useFetchArchive } from '@/features/archive/useFetchArchive'
import { SensorArchive } from '@/entities'
import { Fields } from '@/shared/config/types'

const props = defineProps<ControlPanelProps>()

const {fetchArchive} = useFetchArchive()
const {fetchProps, intervals, shownData} = useControlPanel(props)

const { data: archive } = useQuery({
  queryKey: ['fetchData', fetchProps.value],
  queryFn: () => fetchIndicatorArchive(fetchProps.value),
})

const fetchIndicatorArchive = async ({ fields, interval }: { fields: string[]; interval: number }) => {
  const dataObject: SensorArchive = {}
  await Promise.all(
    fields.map(async (field) => {
      const data  = await fetchArchive(field, interval)
      dataObject[field as Fields] = data.response[field as Fields]
    }),
  )

  return dataObject
}

</script>

<template>
  <div class="control-panel__wrapper">
    <div class="control-panel__left">
      <TheIndicators v-model="fetchProps.fields" :fields="fields" :shown-data="shownData" />
    </div>
    <div v-if="fetchProps.fields.length" class="control-panel__right">
      <TheChart
        v-if="archive"
        :archive="archive"
        :fields="fetchProps.fields"
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

    @include lg {
      justify-content: left;
      gap: 30px;
    }
  }

  &__left {
    width: 800px;
    @include xl {
      width: 700px;
    }

    @include lg {
      width: 400px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
    height: 600px;

    @include sm {
      display: none;
    }

    &-select {
      margin-top: auto;
      margin-left: auto;
    }
  }
}
</style>
