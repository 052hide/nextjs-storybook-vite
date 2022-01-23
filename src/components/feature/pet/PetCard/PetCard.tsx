import clsx from 'clsx'
import type { PetCardProps } from './type'

export const PetCard = ({ pet }: PetCardProps) => {
  return (
    <div className={clsx('tw-p-4', 'tw-border tw-rounded')}>
      <p>{pet.name}</p>
    </div>
  )
}
