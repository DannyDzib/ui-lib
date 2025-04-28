// apps/ui_lib_demo/stories/MyButton.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from 'ui';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'components/MyButton',
  component: MyButton,
  parameters: {
    notes: `
     ## MyButton component
     
     It has a prop for label in button
    `,
  },
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    label: 'Hello world',
    onPress: action('my-button-click'),
  },
};
