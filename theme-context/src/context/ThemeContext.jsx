import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();
// const getTheme = () => {
//   const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
//   const storedData = localStorage.getItem("themeData") === "true";
//   return storedData || systemTheme;
// };

const MyProvider = ({ children }) => {
const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return (
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
});
useEffect(() => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);
const themeToggle = () => {
  setTheme(theme === "light" ? "dark" : "light");
};
  // const [theme, setTheme] = useState(getTheme());
  // const themeToggle = () => {
  //   const newTheme = !theme;
  //   setTheme(newTheme);
  // };
  // useEffect(() => {
  //   document.body.classList.toggle("dark", theme);
  //   localStorage.setItem("themeData", theme);
  // }, [theme]);
  return (
    <MyContext.Provider value={{ theme, setTheme, themeToggle }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
