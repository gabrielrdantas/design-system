import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '@organization-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diego3g.png',
    alt: 'Diego Fernandes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Avatar>

export const Primary: StoryObj<typeof Avatar> = {}

export const WithFallback: StoryObj<typeof Avatar> = {
  args: {
    src: undefined,
  },
}