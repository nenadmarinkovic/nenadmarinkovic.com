import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Nenad Marinković</title>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
