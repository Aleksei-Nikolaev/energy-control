import {ApiService} from "@/app/providers/api/index";
import { ArchiveResponse } from '@/app/providers/api/types'


export class ArchiveService extends ApiService {
  getArchive(field: string, interval: number): Promise<ArchiveResponse> {
    return this.get(`/duration/${field}/${interval}`)
  }
}
