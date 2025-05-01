import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    docs: { story: { inline: false } },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
