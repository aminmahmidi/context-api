import React, { useContext } from "react";
import { MyContext } from "../context/ThemeContext";

const Header = () => {
  const {
    theme,
    setTheme,
    handleThemeChange,
    setDropDown,
    dropDown,
    handleDropDown,
  } = useContext(MyContext);
  return (
    <div className="header">
      <div className="logo-container">
        <h3 className="logo"> Amin Mahmidi</h3>
      </div>

      <div className="drop-down-container">
        <button type="button" className="drop-down-btn" onClick={handleDropDown}>
          تنظیمات تم
        </button>
        {
          <div
            className={
              !dropDown
                ? "show-drop-down drop-down"
                : "hide-drop-down drop-down"
            }
          >
            <label>
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === "light"}
                onChange={handleThemeChange}
              />
              روشن
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === "dark"}
                onChange={handleThemeChange}
              />
              تاریک
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                value="system"
                checked={theme === "system"}
                onChange={handleThemeChange}
              />
             سیستم
            </label>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
