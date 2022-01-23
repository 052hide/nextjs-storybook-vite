import { RouterContext } from 'next/dist/shared/lib/router-context'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import '../src/styles/globals.css'

const isProduction = process.env.NODE_ENV === 'production'

initialize()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) =>
    isProduction ? (
      <Story />
    ) : (
      <RouterContext.Provider
        value={{
          // actionsを使いたい
          push: (path) => alert(`router push: { path: ${path} }`),
          replace: () => Promise.resolve(),
          prefetch: () => Promise.resolve(),
        }}
      >
        <Story />
      </RouterContext.Provider>
    ),
  mswDecorator,
]
