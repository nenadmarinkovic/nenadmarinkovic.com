import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";

export default function Website({ Component, pageProps }: AppProps) {
  const [isMounted, setMounted] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        {isMounted && (
          <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
        )}
      </ThemeProvider>
    </>
  );
}
