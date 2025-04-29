import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import { fieldColors } from '@/shared/config/constants'
import { ChartProps } from '@/widgets/control-panel/types/ChartProps'
import { SensorTimeSeries, SensorValue } from '@/entities'
import { Fields } from '@/shared/config/types'
import { ChartSensorSet, DataPoint } from '@/widgets/control-panel/types/ChartSensorSet'
import { FieldNames } from '@/shared/config/types/Fields'
import { ChartDataset } from 'chart.js'

export const useChart = (props: ChartProps) => {
  const chartData = ref();
  const chartOptions = ref();


  const normalizeData = (archive: SensorTimeSeries) => {
    const dateArray = Object.keys(archive).sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf())
    return dateArray.reduce<DataPoint[]>((acc, curr) => {
      const sensorData: SensorValue = archive[curr as Fields];

      if (sensorData.Valid) {
        acc.push({
          x: dayjs(curr).valueOf(),
          y: sensorData.V
        });
      }
      return acc
    }, [])
  }

  const normalizedData = computed(() => {
    return props.fields.reduce((acc, curr) => {
      const series = props.archive[curr];
      if (series) {
        acc[curr] = normalizeData(series);
      }
      return acc
    }, {} as ChartSensorSet)
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

  type ChartDatasetByField = Record<Fields, DataPoint[]>



  const setChartData = (fieldNames: FieldNames, fields: Fields[],  data: ChartDatasetByField) => {
    return {
      datasets: fields.reduce<ChartDataset<'line'>[]>((acc, curr) => {
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

  return {
    chartData,
    chartOptions,
    normalizedData,
    setChartData,
    setChartOptions
  }
}
