import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { GlobalStyles } from 'pages/styles';

addDecorator((story) => (
  <div>
    <GlobalStyles />
    {story()}
  </div>
));

addDecorator(StoryRouter());

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
