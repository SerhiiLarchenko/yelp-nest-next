/* eslint-disable react/jsx-props-no-spreading */
const App = ({ Component, pageProps }): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
