import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';

import { Layout } from 'components/common';
import { LIGHT_THEME } from 'config/styles/themes';
import { COLORS } from 'config/styles/colors';

import { GlobalStyles } from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />
      {/* eslint-disable react/jsx-props-no-spreading */}
      <NextNprogress color={COLORS.primary} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
