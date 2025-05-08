import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-center items-center  dark:bg-gray-900 transition-colors duration-[500ms]">
      <button
        onClick={toggleTheme}
        className="flex cursor-pointer items-center px-4 py-2 bg-slate-500 text-white rounded-lg shadow-md hover:bg-slate-600 transition duration-[500ms]"
      >
        {theme === "light" ? (
          <Moon className="mr-2" />
        ) : (
          <Sun className="mr-2" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
