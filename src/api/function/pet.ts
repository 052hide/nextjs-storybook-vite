import axios from 'axios'
import type { PetsResponse } from '@/api/type/pet'

export const getPets = async () => {
  return axios.get<PetsResponse>(`${process.env.NEXT_PUBLIC_API_URL}/pets`)
}
