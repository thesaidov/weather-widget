/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme((prev) => (prev === true ? false : true));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme ? "bg-[#f8f9fa] text-[#212529] accent-[#0d6efd]" : "bg-[#212529] text-[#f8f9fa] accent-[#0d6efd]"} px-16 max-[400px]:px-3 pt-10`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;