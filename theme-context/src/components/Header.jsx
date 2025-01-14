import React, { useContext } from "react";
import { MyContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme, themeToggle } = useContext(MyContext);
  return (
    <div className="header">
      header
      <button type="button" onClick={themeToggle}>
        toggle
      </button>
    </div>
  );
};

export default Header;
