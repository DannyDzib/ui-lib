import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

const meta = {
  title: 'components/MyText',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const text: Story = {
  args: {
    children: 'Hello world',
    onPress: () => console.log('click'),
  },
};
