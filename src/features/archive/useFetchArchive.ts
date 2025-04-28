import { $api } from '@/app/providers/api'

export const useFetchArchive = () => {
  const { archiveService } = $api

  const fetchArchive = (field, interval) => {
    return archiveService.getArchive(field, interval)
  }

  return {
    fetchArchive,
  }
}
