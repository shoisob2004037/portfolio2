"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    // Auto-detect system preference on first load
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Persist choice
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    // Apply data-theme attribute to <html> so CSS variables switch
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    // Also toggle Tailwind-style class (in case anything relies on it)
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};