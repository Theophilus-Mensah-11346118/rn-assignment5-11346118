// src/theme/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

const lightTheme = {
  colors: {
    primary: '#007bff',
    background: '#ffffff',
    text: '#000000',
    border: '#dddddd',
  },
};

const darkTheme = {
  colors: {
    primary: '#007bff',
    background: '#000000',
    text: '#ffffff',
    border: '#444444',
  },
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
