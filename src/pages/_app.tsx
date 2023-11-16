import '../styles/global.css';

import type { AppProps } from 'next/app';

import { Meta } from '@/components/layout/Meta';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
};

export default App;
