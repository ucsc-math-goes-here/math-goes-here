import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const HeaderBarContent = ({ children, leftChildren, rightChildren }) => {

  return (
    <div style={{
      height: '100%',
      width: '100%',
      padding: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      display: "flex",
      maxWidth: "1900px",
      margin: "auto",
      gap: "1rem"
    }}>
      {children}
    </div>
  );
};

export default HeaderBarContent;