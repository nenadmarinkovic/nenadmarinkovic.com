import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/Banner.module.scss";

function Banner() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme ? "light-theme" : "dark-theme"}>
      <div className={styles.banner}>
        <Header setTheme={setTheme} theme={theme} />
      </div>
    </div>
  );
}

export default Banner;
