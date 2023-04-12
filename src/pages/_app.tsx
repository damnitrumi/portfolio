import { AppProps } from "next/app";

import "../../public/assets/fonts/styles.css";
import { GlobalStyles } from "../styles/global-styles";
import { PageThemeProvider } from "contexts/PageTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </PageThemeProvider>
  );
}

export default MyApp;
