import Layout from '@/components/Layout';
import { wrapper } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App({ Component, pageProps }: AppProps) {
  const store: any = useStore();

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  );
}

export default wrapper.withRedux(App);
