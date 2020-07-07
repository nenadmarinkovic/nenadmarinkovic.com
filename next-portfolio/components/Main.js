import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../hooks/useDarkMode";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";

import Banner from "./Banner";

function Main() {
    
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Banner toggleTheme={toggleTheme}  />
      </>
    </ThemeProvider>
  );
}

export default Main;
