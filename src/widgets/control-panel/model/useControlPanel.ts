import { computed, ref, toRefs } from 'vue'
import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'
import { ControlPanelProps } from '@/widgets/control-panel/types/ControlPanelProps'

export const useControlPanel = (props: ControlPanelProps) => {
  const { signal, fields } = toRefs(props)

  const shownData = computed(() => {
    if (signal.value) {
      return fields.value.reduce(
        (acc, curr) => {
          const sensorValue = signal.value[curr]
          if (sensorValue && typeof sensorValue === 'object' && 'Valid' in sensorValue) {
            acc[curr] = sensorValue.Valid ? sensorValue.V : 'n/d'
          } else {
            acc[curr] = 'n/d'
          }
          return acc
        },
        {} as Record<string, string | number>,
      )
    }
  })

  const fetchProps = ref({
    fields: [fields.value[0]],
    interval: 30,
  })

  const { data: archive } = useQuery({
    queryKey: ['fetchData', fetchProps.value],
    queryFn: () => fetchIndicatorArchive(fetchProps.value),
  })

  const fetchIndicatorArchive = async ({ fields, interval }: { fields: string[]; interval: number }) => {
    const entries = await Promise.all(
      fields.map(async (field) => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/duration/${field}/${interval}`,
        )
        return [field, data]
      }),
    )
    return Object.fromEntries(entries)
  }

  const intervals = ref([
    { name: '30 мин', value: 30 },
    { name: '25 мин', value: 25 },
    { name: '20 мин', value: 20 },
    { name: '15 мин', value: 15 },
    { name: '10 мин', value: 10 },
    { name: '5 мин', value: 5 },
  ])

  return {
    intervals,
    fetchProps,
    shownData,
    archive,
  }
}
