import {ApiService} from "@/app/providers/api/index";
import {getLastSensorValues} from "@/app/providers/api/types/sensorsService";

export class SensorService extends ApiService {
    getValues(): Promise<getLastSensorValues> {
        return this.get('/last')
    }
}
