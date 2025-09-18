import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {

  "stories": [
    "../src/pages/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": ['@storybook/addon-docs', '@storybook/addon-a11y'],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: (config, { configType }) => {

    // Sempre que for um subpath, precisamos configurar o config.base que é o nome do projeto.
    if (configType === 'PRODUCTION') {
      config.base = 'design-system'
    }
     return config
  }
};
export default config;