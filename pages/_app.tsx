import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";

const criticalThemeCss = `  
.next-light-theme {  
--background: #fff;  
--text: #000;  
}  
  
.next-dark-theme {  
--background: #000;  
--text: #fff;  
}  
  
body {  
  background: var(--background);  
  color: var(--text);  
}  
`;

export default function Website({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalThemeCss }} />
      </Head>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}
