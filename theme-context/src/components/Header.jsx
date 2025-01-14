import React, { useContext } from "react";
import { MyContext } from "../context/ThemeContext";
import { Sun, Moon, Monitor, CaretDown } from "@phosphor-icons/react";
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
        <button
          type="button"
          className="drop-down-btn"
          onClick={handleDropDown}
        >
          تنظیمات تم
          <span className={dropDown ? "arrow-icon" : "arrow-icon-down"}>
            <CaretDown />
          </span>
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
              <span>
                <Sun /> روشن
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === "dark"}
                onChange={handleThemeChange}
              />
              <span>
                <Moon /> تاریک
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                value="system"
                checked={theme === "system"}
                onChange={handleThemeChange}
              />
              <span>
                <Monitor /> سیستم
              </span>
            </label>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
