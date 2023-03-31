import type { AppProps as NextAppProps } from "next/app";
import AppPage from "~/interfaces/app-page.interface";
import AbortController from "abort-controller";
import fetch, { Headers, Request, Response } from "cross-fetch";

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

import { wrapper } from "~/store";
import createEmotionCache from "~/helpers/create-emotion-cache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Head from "next/head";

import "~/assets/css/main.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type AppProps = NextAppProps & {
  Component: AppPage;
  emotionCache?: EmotionCache;
};

import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "~/theme";

function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const store = wrapper.useStore();

  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={emotionCache}>
        <Provider store={store}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
