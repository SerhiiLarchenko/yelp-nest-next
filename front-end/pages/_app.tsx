import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';

import { Layout } from 'components/common';
import { LIGHT_THEME } from 'config/styles/themes';

import { GlobalStyles } from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />
      {/* eslint-disable react/jsx-props-no-spreading */}
      <NextNprogress color="#e32636" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
