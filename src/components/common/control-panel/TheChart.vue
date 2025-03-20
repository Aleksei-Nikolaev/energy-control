<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { fieldNames } from '@/types/fieldNames.ts'

const props = defineProps<({
  archive?: any
  field?: string
  interval?: number
})>()

const chartData = ref();
const chartOptions = ref();


const normalizedData = computed(() => {
  const dateArray = Object.keys(props.archive).sort((a, b) => new Date(a) - new Date(b))

  const zeroPoint = new Date(dateArray[dateArray.length - 1])
  return dateArray.reduce((acc, curr) => {
    if (props.archive[curr]["Valid"]) {
      acc.push({
        x: (new Date(curr) - zeroPoint) / 60000,
        y: props.archive[curr]["V"]
      })
    }
    return acc
  }, [])
})

const setChartOptions = (interval) => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        type: 'linear',
        min: -interval,
        max: 0,
        grid: {
          color: surfaceBorder
        },

      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        },
      }
    }
  };
}

const setChartData = (label, data) => {
  const documentStyle = getComputedStyle(document.documentElement);
  return {
    datasets: [
      {
        label: label,
        data: data,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        tension: 0.4
      }
    ]
  };
};

onMounted(() => {
  watch(() => normalizedData, (newValue) => {
    chartOptions.value = setChartOptions(props.interval)
    chartData.value = setChartData(fieldNames[props.field], newValue.value)
  }, {
    deep: true,
    immediate: true
  })
});

</script>

<template>
  <Chart class="chart"  type="line" :data="chartData" :options="chartOptions" />
</template>

<style scoped lang="scss">
.chart {
  height: 100%;
}
</style>
