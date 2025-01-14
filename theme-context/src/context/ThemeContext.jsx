import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext(null);
const getTheme = () => {
  const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const storedData = localStorage.getItem("dark") === "true";
  return systemTheme || storedData;
};
const MyProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());
  const themeToggle = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme-data", newTheme);
  };
  useEffect(() => {
    document.body.classList.toggle("dark", theme);
  }, [theme]);
  return (
    <MyContext.Provider value={{ theme, setTheme, themeToggle }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
