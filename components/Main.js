import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import Banner from "./Banner";
import Work from "./Work";

function Main() {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Banner toggleTheme={toggleTheme} theme={theme} />
        <Work/>
    </ThemeProvider>
  );
}

export default Main;
