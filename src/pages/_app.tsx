import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';

import { Chakra } from '../Chakra';
import { theme } from '../theme';

interface Cookies {
  cookies?: string;
}

export interface AppRenderProps {
  pageProps: Cookies & object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}

export default function App({ Component, pageProps }: AppRenderProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Chakra>
  );
}
