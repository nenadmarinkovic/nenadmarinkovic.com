import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = (): [Theme, () => void, boolean] => {
  const [theme, setTheme] = useState<Theme>("light");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    const prefersLightMode = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;

    if (!localTheme) {
      setMode(prefersLightMode ? "light" : "dark");
    } else {
      setTheme(localTheme as Theme);
    }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
