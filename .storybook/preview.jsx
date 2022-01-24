import { RouterContext } from 'next/dist/shared/lib/router-context'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { action } from '@storybook/addon-actions'

import '../src/styles/globals.css'

initialize()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <RouterContext.Provider
      value={{
        // actionsを使いたい
        push: (...args) => {
          action('nextRouter.push')(...args)
          return Promise.resolve(true)
        },
        replace(...args) {
          action('nextRouter.replace')(...args)
          return Promise.resolve(true)
        },
        prefetch(...args) {
          action('nextRouter.prefetch')(...args)
          return Promise.resolve()
        },
      }}
    >
      <Story />
    </RouterContext.Provider>
  ),
  mswDecorator,
]
