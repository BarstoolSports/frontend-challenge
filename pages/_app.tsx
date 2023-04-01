import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { theme } from '../src/constants/theme';
import { CssVarsProvider } from '@mui/joy';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={theme}>
      <Component {...pageProps} />
      <Toaster toastOptions={{ duration: 1500 }} position="bottom-right" />
    </CssVarsProvider>
  );
}

export default MyApp;
