import React, {useEffect, useState} from "react";
import Header from "./Header";
import styles from "../styles/Banner.module.scss";

function Banner() {
  const [theme, setTheme] = useState('light');

  const setTheme = () => {
    if (theme === 'light-theme') {
      window.localStorage.setItem('theme', 'dark-theme')
      setTheme('dark-theme')
    } else {
      window.localStorage.setItem('theme', 'light-theme')
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])


 
  return (
    <div className={theme ? "light-theme" : "dark-theme"}>
      <div className={styles.banner}>
        <Header setTheme={setTheme} theme={theme} />
      </div>
    </div>
  );
  }

export default Banner;
