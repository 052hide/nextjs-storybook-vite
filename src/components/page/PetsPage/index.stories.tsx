import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { getPets } from '../../../../.mocks/api/pet'

import { PetsPage } from './PetsPage'

const meta: ComponentMeta<typeof PetsPage> = {
  title: 'Components/page/PetsPage',
  component: PetsPage,
  parameters: {
    controls: { expanded: true },
    msw: {
      handlers: [getPets],
    },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof PetsPage> = {
  args: {},
}
