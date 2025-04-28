<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { fieldNames } from '@/shared/config/fieldNames'
import dayjs from 'dayjs'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { fieldColors } from '@/shared/config'



const props = defineProps<({
  archive?: any
  fields?: string[]
  interval?: number
})>()

const chartData = ref();
const chartOptions = ref();

const normalizeData = (archive) => {
  const dateArray = Object.keys(archive).sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf())
  return dateArray.reduce((acc, curr) => {
    if (archive[curr]["Valid"]) {
      acc.push({
        x: dayjs(curr).valueOf(),
        y: archive[curr]["V"]
      })
    }
    return acc
  }, [])
}


const normalizedData = computed(() => {
  return props.fields.reduce((acc, curr) => {
    acc[curr] = normalizeData(props.archive[curr].response[curr])
    return acc
  }, {})
})

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        display: true,
        align: "start",
        layout: 'vertical',
        onClick: () => {},
        labels: {
          color: "lightgray",
          usePointStyle: true,
          pointStyle: 'line',
          pointRadius: 100
        }
      }
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6
      },
      line: {
        borderWidth: 2
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


const setChartData = (fieldNames, fields,  data) => {
  return {
    datasets: fields.reduce((acc, curr) => {
      acc.push({
        label:  fieldNames[curr],
        data: data[curr],
        fill: false,
        borderColor: fieldColors[curr],
        tension: 0.4
      })
      return acc
    }, [])
  };
};

watch(() => normalizedData, (newValue) => {
  chartOptions.value = setChartOptions(props.interval)
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
