import {ApiService} from "@/app/providers/api/index";


export class ArchiveService extends ApiService {
  getArchive(field, interval): Promise {
    return this.get(`/duration/${field}/${interval}`)
  }
}
