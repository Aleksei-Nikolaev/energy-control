import { SensorArchive } from '@/entities'
import { Fields } from '@/shared/config/types'

export interface ChartProps {
  archive: SensorArchive
  fields: Fields[]
  interval: number
}
