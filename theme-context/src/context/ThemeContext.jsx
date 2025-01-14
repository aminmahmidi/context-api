import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [dropDown, setDropDown] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "system";
  });
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const selectedTheme =
      theme === "system" ? (prefersDarkScheme ? "dark" : "light") : theme;
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        document.documentElement.setAttribute(
          "data-theme",
          mediaQuery.matches ? "dark" : "light"
        );
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <MyContext.Provider
      value={{
        theme,
        setTheme,
        handleThemeChange,
        setDropDown,
        dropDown,
        handleDropDown,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
