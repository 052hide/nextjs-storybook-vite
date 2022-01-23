import { useState, useEffect } from 'react'
import type { Pet } from '@/api/type/pet'
import { getPets } from '@/api/function/pet'
import { PetCardList } from '@/components/feature/pet'

export const PetsPage = () => {
  const [pets, setPets] = useState<Pet[]>([])

  useEffect(() => {
    const f = async () => {
      const res = await getPets()
      setPets(res.data.items)
    }
    f()
  }, [])

  return (
    <div>
      <PetCardList pets={pets} />
    </div>
  )
}
