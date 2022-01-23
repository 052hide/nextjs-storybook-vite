import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { BaseLink } from './BaseLink'

const meta: ComponentMeta<typeof BaseLink> = {
  title: 'Components/base/BaseLink',
  component: BaseLink,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof BaseLink> = {
  args: {
    href: '/',
    children: 'Link',
  },
}
