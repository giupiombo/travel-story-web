import Footer from '@/components/layout/Footer';
import MainNavigation from '@/components/layout/MainNavigation';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <MainNavigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
