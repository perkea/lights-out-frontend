import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      const theme = localTheme === "light" ? "light" : "dark";
      setMode(theme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);
  return [mode, toggleMode];
};

export default useDarkMode;
