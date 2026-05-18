import { useEffect, useState, type ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "./ThemeSwitch.css";

const LOCAL_STORAGE_THEME_KEY = "isDarkThemeSelected";

function ThemeSwitch() {
  const [isDarkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  function handleThemeChange(e: ChangeEvent<HTMLInputElement>) {
    localStorage.setItem(
      LOCAL_STORAGE_THEME_KEY,
      e.target.checked ? "dark" : "light",
    );
    setDarkMode(e.target.checked);
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  return (
    <div className="themeSwitchContainer">
      <FontAwesomeIcon icon={faSun} />
      <label className="switch" aria-label="Change theme">
        <input
          id={isDarkMode ? "dark-theme-checkbox" : "light-theme-checkbox"}
          type="checkbox"
          checked={isDarkMode}
          onChange={handleThemeChange}
        />
        <span className="slider round" />
      </label>
      <FontAwesomeIcon icon={faMoon} />
    </div>
  );
}

export default ThemeSwitch;
