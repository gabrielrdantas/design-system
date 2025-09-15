import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, type BoxProps } from '@organization-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: { 
    children: (
        <>
            <p>Testando o elemento Box </p>
        </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
