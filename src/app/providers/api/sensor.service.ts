import {ApiService} from "@/app/providers/api/index";
import { LastSensorValues } from '@/app/providers/api/types'

export class SensorService extends ApiService {
    getValues(): Promise<LastSensorValues> {
        return this.get('/last')
    }
}
