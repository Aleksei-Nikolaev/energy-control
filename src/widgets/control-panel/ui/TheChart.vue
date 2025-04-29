<script setup lang="ts">
import { watch } from 'vue'
import { fieldNames } from '@/shared/config/constants/fieldNames'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { useChart } from '@/widgets/control-panel/model/useChart'
import { ChartProps } from '@/widgets/control-panel/types/ChartProps'



const props = defineProps<ChartProps>()

const {chartOptions, chartData, normalizedData, setChartOptions, setChartData} = useChart(props)


watch(() => normalizedData, (newValue) => {
  chartOptions.value = setChartOptions()
  chartData.value = setChartData(fieldNames, props.fields, newValue.value,)
}, {
  deep: true,
  immediate: true
})

</script>

<template>
    <Chart class="chart"  type="line" :data="chartData" :options="chartOptions" />
</template>

<style scoped lang="scss">
.chart {
  height: 100%;

  &__heading {
    margin: 0;

    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px
    }
  }
}
</style>
