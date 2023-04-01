import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster toastOptions={{ duration: 1500 }} position="bottom-right" />
    </>
  );
}

export default MyApp;
