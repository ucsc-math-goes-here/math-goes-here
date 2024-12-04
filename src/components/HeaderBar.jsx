import React, { useState, useContext } from 'react';
import {
  Box,
  Toolbar,
  AppBar,
  Drawer,
  Button,
  List,
  ListItem,
  Collapse,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

import { AppThemeContext } from '../contexts/AppThemeContext';
import SideMenuContent from '../components/SideMenucontent';


import logo from '../assets/logo.png';

const HeaderBar = ({ children }) => {
  const appTheme = useContext(AppThemeContext);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setSideDrawerOpen(isOpen);
  };
  return (
    <Box>

    <AppBar
      position="fixed"
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        backgroundColor: appTheme.primaryColor,
        paddingTop: "1rem",
        paddingBottom: "0.7rem",
        gap: "1rem",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
      }}>
      <Toolbar sx={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          height: '100%',
          width: '100%',
          padding: 0,
          alignItems: 'center',
          justifyContent: 'flex-start',
          display: "flex",
          maxWidth: "1280px",
          margin: "auto",
          gap: "1rem"
        }}>
          <img src={logo} alt="Math Goes Here Logo" />
          <Button variant="outlined" onClick={sideDrawerOpen ? toggleDrawer(false) : toggleDrawer(true)}>Lessons</Button>
        </div>
      </Toolbar>

      </AppBar>
      <Drawer
        open={sideDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
        }}
      >
        <SideMenuContent />
      </Drawer>
    </Box>
  );
};

export default HeaderBar;