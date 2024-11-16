import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const HeaderBarContent = ({ children, leftChildren, rightChildren }) => {

  return (
    <Toolbar sx={{
      height: '100%',
      width: '100%',
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ height: '100%', width: "20%" }}>
        {leftChildren}
      </div>
      <div style={{ width: "60%" }}>
        {children}
      </div>
      <div style={{ height: '100%', width: "20%" }}>
        {rightChildren}
      </div>
    </Toolbar>
  );
};

export default HeaderBarContent;