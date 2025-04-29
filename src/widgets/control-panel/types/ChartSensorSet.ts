import { Fields } from '@/shared/config/types'

export type DataPoint = {
  x: number
  y: number
}

export type ChartSensorSet = Record<Fields, DataPoint[]>;
