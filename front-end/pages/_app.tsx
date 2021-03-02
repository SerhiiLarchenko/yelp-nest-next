import type { AppProps } from 'next/app';

import { GlobalStyles } from './styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
