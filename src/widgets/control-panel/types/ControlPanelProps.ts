import { Fields } from '@/shared/config/types'
import { LastSensorValues } from '@/app/providers/api/types'

export interface ControlPanelProps {
  signal?: LastSensorValues
  fields: Fields[]
}
