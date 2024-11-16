import React, { createContext, useContext } from 'react';
import GlobalTheme from '../configs/GlobalTheme';

export const AppThemeContext = createContext();

export const AppThemeProvider = ({ children }) => {
  return (
    <AppThemeContext.Provider value={GlobalTheme}>
      {children}
    </AppThemeContext.Provider>
  );
};

