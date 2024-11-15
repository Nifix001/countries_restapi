"use client"

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Get the user's theme preference from localStorage or set default to "light"
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 p-2 rounded-md bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <>
          <Moon className="w-5 h-5 text-gray-600 dark:text-white" />
          <span className="text-gray-600 dark:text-white">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="w-5 h-5 text-yellow-500" />
          <span className="text-black">Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
