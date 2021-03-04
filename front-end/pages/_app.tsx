import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from 'config/styles/themes';

import { GlobalStyles } from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
