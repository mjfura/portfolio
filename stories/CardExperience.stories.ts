import type { Meta, StoryObj } from '@storybook/react'
import { CardExperience } from '../components/common/CardExperience'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Cards/CardExperience',
  component: CardExperience,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    rangeDate: { control: 'text' }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    title: 'Card Title',
    description: 'Card Description',
    rangeDate: '2020-2021',
    subtitle: 'Card Subtitle'
  }
} satisfies Meta<typeof CardExperience>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    subtitle: 'Subtítulo de la carta',
    title: 'Título de la Carta',
    description: 'Descripción de la carta',
    rangeDate: '2021 - Actualidad'
  }
}
