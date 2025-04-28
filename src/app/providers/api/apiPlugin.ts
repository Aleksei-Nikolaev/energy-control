import axios, { AxiosInstance } from 'axios'
import { App } from 'vue'
import { SensorService } from '@/app/providers/api/sensor.service'
import { ArchiveService } from '@/app/providers/api/archive.service'

export interface IApi {
  sensorService: SensorService,
  archiveService: ArchiveService
}

let $api: IApi

export const createApiClient = (): IApi => {
  const httpClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  })

  return {
    archiveService: new ArchiveService(httpClient),
    sensorService: new SensorService(httpClient),
  }
}

export default {
  install(app: App) {
    $api = createApiClient()
    app.provide('$api', $api)
  },
}

export { $api }
