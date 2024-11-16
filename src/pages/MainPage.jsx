import React, { useState, useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { AppThemeContext } from '../contexts/AppThemeContext';
import MainLayout from './MainLayout';
import SideDrawer from '../components/SideDrawer';


const allLessons = [
  {name: "Interpolation Curves", unlocked: true, page: "InterpolationCurves"},
  {name: "Dot Products", unlocked: true, page: "DotProducts"},
  {name: "Add and Subtract", unlocked: false, page: "AddAndSubtract"},
  {name: "Count to 10", unlocked: false, page: "CountTo10"},
  {name: "Pronounce 'Math'", unlocked: false, page: "PronounceMath"},
];

function MainPage() {
  const [sidedrawerOpen, setSideDrawerOpen] = useState(true);
  const appTheme = useContext(AppThemeContext);

  const toggleSideDrawer = () => {
    setSideDrawerOpen(!sidedrawerOpen);
  };

  const headbarElement = (
    <div>
      <Typography variant="h3" component="div">
        Math Goes Here
      </Typography>
      <div style={{ height: 20 }} />
      <Typography variant="h7" component="div">
        Welcome to Math Goes Here! Browse through the lessons below.
      </Typography>
    </div>
  );

  return (
    <MainLayout headbarElement={headbarElement} toggleSideDrawer={toggleSideDrawer}>
      <SideDrawer sidedrawerOpen={sidedrawerOpen} allOptions = {allLessons}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography>
          Let's enjoy the fun of learning math!
        </Typography>
      </Box>
    </MainLayout>
  );
}

export default MainPage;