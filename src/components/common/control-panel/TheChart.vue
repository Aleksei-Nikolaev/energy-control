<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { fieldNames } from '@/types/fieldNames.ts'
import dayjs from 'dayjs'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';



const props = defineProps<({
  archive?: any
  field?: string
  interval?: number
})>()

const chartData = ref();
const chartOptions = ref();


const normalizedData = computed(() => {
  const dateArray = Object.keys(props.archive).sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf())

  return dateArray.reduce((acc, curr) => {
    if (props.archive[curr]["Valid"]) {
      acc.push({
        x: dayjs(curr).valueOf(),
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
        display: false
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          displayFormats: {
            minute: 'HH:mm'
          },
        },
        ticks: {
          maxTicksLimit: 6,
          autoSkip: true,
        },
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


const setChartData = (labelFirst, labelSecond, data) => {
  const documentStyle = getComputedStyle(document.documentElement);
  return {
    datasets: [
      {
        label:  [labelFirst, labelSecond],
        data: data,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        tension: 0.4
      }
    ]
  };
};

watch(() => normalizedData, (newValue) => {
  chartOptions.value = setChartOptions(props.interval)
  chartData.value = setChartData(fieldNames[props.field], dayjs(newValue.value[newValue.value.length - 1]["x"]).format("HH:mm DD/MM/YYYY"), newValue.value)
}, {
  deep: true,
  immediate: true
})



</script>

<template>
  <div class="chart__heading-container">
    <h3 class="chart__heading">{{fieldNames[field]}}</h3>
    <p class="chart__heading">{{dayjs(normalizedData[normalizedData.length - 1]["x"]).format("Время HH:mm Дата DD/MM/YYYY")}}</p>
  </div>
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
