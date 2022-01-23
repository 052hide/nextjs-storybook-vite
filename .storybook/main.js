const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal(config, { configType }) {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  },
}
