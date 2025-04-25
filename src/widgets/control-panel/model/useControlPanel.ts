import { computed, ref, toRefs } from 'vue'
import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'

export const useControlPanel = (props) => {
  const { signal, fields } = toRefs(props)

  const shownData = computed(() => {
    if (signal.value) {
      return fields.value.reduce((acc, curr) => {
        acc[curr] = signal.value[curr]?.Valid ? signal.value[curr].V : 'n/d'
        return acc
      }, {})
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

  const fetchIndicatorArchive = async ({ fields, interval }) => {
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
    archive
  }
}
