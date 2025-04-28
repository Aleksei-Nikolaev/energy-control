import { $api } from '@/app/providers/api'

export const useFetchSensorValues = () => {
  const { sensorService } = $api

  const fetchValues = () => {
    return sensorService.getValues()
  }

  return {
    fetchValues,
  }
}
