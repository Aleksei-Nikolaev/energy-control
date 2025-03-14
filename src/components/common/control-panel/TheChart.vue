<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps<({
  archive?: any
})>()

const dateArray = Object.keys(props.archive).sort((a, b) => new Date(a) - new Date(b))

const charData = computed(() => {
  const zeroPoint = new Date(dateArray[dateArray.length - 1])
  return dateArray.reduce((acc, curr) => {
    acc.push({
      x: (new Date(curr) - zeroPoint) / 60000,
      y: props.archive[curr]["V"]
    })
    return acc
  }, [])
})

const setChartOptions = () => {
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
        min: -30,
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


onMounted(() => {
  chartData.value = setChartData("T жопы");
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = (label) => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    datasets: [
      {
        label: label,
        data: charData.value,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        tension: 0.4
      }
    ]
  };
};

</script>

<template>
  <Chart class="chart"  type="line" :data="chartData" :options="chartOptions" />

</template>

<style scoped lang="scss">
.chart {
  height: 100%;
}
</style>
