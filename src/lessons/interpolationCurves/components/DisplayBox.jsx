import React, { useEffect, useContext } from 'react';
import { FormulaContext } from '../contexts/FormulaContext';
import { AppThemeContext } from '../../../contexts/AppThemeContext';


const DisplayBox = ({ children }) => {
  const appTheme = useContext(AppThemeContext);

  return (
    <div
      style={{
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: `${appTheme.displayContentBorderRadius}px`,
        backgroundColor: appTheme.cardColor,
        boxShadow: appTheme.bigDropShadow,
        marginBottom: '15px',
      }}
    >
      {children}
    </div>
  );
};
export default DisplayBox;