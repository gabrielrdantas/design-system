import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, MultiStep } from '@organization-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<typeof MultiStep>

export const Primary: StoryObj<typeof MultiStep> = {
  args: {},
}

export const Full: StoryObj<typeof MultiStep> = {
  args: {
    currentStep: 4,
  },
}