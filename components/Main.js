import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import Banner from "./Banner";
import Work from "./Work";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Technology from "./Technology";
import AboutMe from "./AboutMe";

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
      <Work theme={theme} />
      <Technology />
      <Portfolio theme={theme} />
      <AboutMe />
      <Footer />
    </ThemeProvider>
  );
}

export default Main;
