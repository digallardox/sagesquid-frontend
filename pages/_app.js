import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';
import { GoogleTagManager } from "@next/third-parties/google";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
      <GoogleTagManager gtmId="GTM-K5GL3H8W" />
    </FaustProvider>
  );
}
