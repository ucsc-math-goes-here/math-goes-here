import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import { AppThemeContext } from '../contexts/AppThemeContext';

const MainLayout = ({ headbarElement, children }) => {
  const appTheme = useContext(AppThemeContext);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        {children}
    </Box>
  );
};

export default MainLayout;