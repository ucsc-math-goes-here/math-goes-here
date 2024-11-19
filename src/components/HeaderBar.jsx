import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import { AppThemeContext } from '../contexts/AppThemeContext';

const HeaderBar = ({ children }) => {
  const appTheme = useContext(AppThemeContext);

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: appTheme.appBarHeight, backgroundColor: appTheme.primaryColor }}>
      <Toolbar sx={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;