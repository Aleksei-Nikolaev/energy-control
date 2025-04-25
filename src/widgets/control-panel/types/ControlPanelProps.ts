import { lastSensorValues } from '@/app/providers/api/types/sensorsService'

export interface ControlPanelProps {
  signal: lastSensorValues
  fields: string[]
}
