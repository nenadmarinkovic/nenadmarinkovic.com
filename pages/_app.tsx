import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import { useReportWebVitals } from "next/web-vitals";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useReportWebVitals((metric) => {
    console.log(metric);
  });

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
