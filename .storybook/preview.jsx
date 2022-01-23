import { RouterContext } from 'next/dist/shared/lib/router-context'

import '../src/styles/globals.css'

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
        push: (path) => alert(`router push: { path: ${path} }`),
        replace: () => Promise.resolve(),
        prefetch: () => Promise.resolve(),
      }}
    >
      <Story />
    </RouterContext.Provider>
  ),
]
