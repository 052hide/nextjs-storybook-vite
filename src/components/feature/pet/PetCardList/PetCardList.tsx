import clsx from 'clsx'
import type { PetCardListProps } from './type'
import { PetCard } from '@/components/feature/pet'

export const PetCardList = ({ pets }: PetCardListProps) => {
  return (
    <ul
      className={clsx(
        'tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3',
        'tw-gap-4'
      )}
    >
      {pets.map((pet, i) => (
        <li key={`pet-card-list-item_${i}_${pet.id}`}>
          <PetCard pet={pet} />
        </li>
      ))}
    </ul>
  )
}
