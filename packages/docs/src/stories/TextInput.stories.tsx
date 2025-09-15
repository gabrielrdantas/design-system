import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Text, TextInput } from '@organization-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<typeof TextInput>

export const Primary: StoryObj<typeof TextInput> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<typeof TextInput> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<typeof TextInput> = {
  args: {
    prefix: 'cal.com/',
  },
}