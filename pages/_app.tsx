import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((err) => console.log("Service Worker registration failed: ", err));
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
