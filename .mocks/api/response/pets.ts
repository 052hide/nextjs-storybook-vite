import type { Pet } from '../../../src/api/type/pet'
import { petStatus } from '../../../src/api/const/pet'

export const pets: Pet[] = [
  {
    id: 1,
    name: 'ねこ',
    status: petStatus.available,
  },
  {
    id: 2,
    name: 'いぬ',
    status: petStatus.pending,
  },
  {
    id: 3,
    name: 'うさぎ',
    status: petStatus.sold,
  },
]
