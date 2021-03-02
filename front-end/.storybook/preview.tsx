import { addDecorator, DecoratorFn } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '../config/styles/themes';
import { GlobalStyles } from '../pages/styles';

addDecorator((story) => (
  <ThemeProvider theme={LIGHT_THEME}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));

addDecorator(StoryRouter() as DecoratorFn);
