import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import { useDarkMode } from "../hooks/useDarkMode";


import Header from "./Header";

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
        <Header toggleTheme={toggleTheme}  />
        
      </>
    </ThemeProvider>
  );
}

export default Main;
