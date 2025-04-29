import { SensorValue } from '@/entities'

export type LastSensorValues = {
  Id: number;
  date: string;
} & {
  [key: string]: SensorValue | number | string;
}
