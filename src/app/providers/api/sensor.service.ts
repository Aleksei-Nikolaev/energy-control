import {ApiService} from "@/app/providers/api/index";
import {lastSensorValues} from "@/app/providers/api/types/sensorsService";

export class SensorService extends ApiService {
    getValues(): Promise<lastSensorValues> {
        return this.get('/last')
    }
}
