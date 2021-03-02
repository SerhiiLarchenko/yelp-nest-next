/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';

import { GlobalStyles } from './styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
