import { Fields } from '@/shared/config/types'
import { SensorValue } from '@/entities'

export type SensorTimeSeries = Record<string, SensorValue>;

export type SensorArchive = Partial<Record<Fields, SensorTimeSeries>>;
