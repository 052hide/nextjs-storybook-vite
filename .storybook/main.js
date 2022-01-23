const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    ...(isProduction ? ['storybook-addon-next-router'] : []),
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: isProduction ? 'webpack5' : 'storybook-builder-vite',
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  },
  viteFinal(config, { configType }) {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  },
}
