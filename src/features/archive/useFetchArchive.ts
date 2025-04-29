import { $api } from '@/app/providers/api'
import { ArchiveResponse } from '@/app/providers/api/types'

export const useFetchArchive = () => {
  const { archiveService } = $api

  const fetchArchive = (field: string, interval: number): Promise<ArchiveResponse> => {
    return archiveService.getArchive(field, interval)
  }

  return {
    fetchArchive,
  }
}
