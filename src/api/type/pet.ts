import type { PageInfo } from '@/api/type/pageInfo'
import { petStatus } from '@/api/const/pet'

export type PetStatus = typeof petStatus[keyof typeof petStatus]

export type Pet = {
  id: number
  name: string
  status: PetStatus
}

export type PetsResponse = {
  pageInfo: PageInfo
  items: Pet[]
}
