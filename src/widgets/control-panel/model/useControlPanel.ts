import { computed, ref, toRefs } from 'vue'
import { ControlPanelProps } from '@/widgets/control-panel/types/ControlPanelProps'
import { FieldValues } from '@/shared/config/types'

export const useControlPanel = (props: ControlPanelProps) => {
  const { signal, fields } = toRefs(props)

  const shownData = computed(() => {
    return fields.value.reduce(
      (acc, curr) => {
        if (signal && signal.value) {
          const currentValue = signal.value[curr]
          const sensorValue = currentValue ? currentValue : null

          if (sensorValue && typeof sensorValue === 'object' && 'Valid' in sensorValue) {
            acc[curr] = sensorValue.Valid ? sensorValue.V : 'n/d'
          }
        } else {
          acc[curr] = 'n/d'
        }

        return acc
      },
      {} as FieldValues,
    )
  })

  const fetchProps = ref({
    fields: [fields.value[0]],
    interval: 30,
  })

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
  }
}
