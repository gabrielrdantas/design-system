import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: { theme: themes.dark }, 
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121214' }, 
        { name: 'light', value: '#ffffff' },
      ],
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;