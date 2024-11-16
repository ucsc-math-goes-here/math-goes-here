import React, { useState, useContext, useRef } from 'react';
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
import LessonPreviewDotProducts from '../lessons/dotProducts/LessonPreviewDotProducts';
import LessonPreviewInterpolationCurves from '../lessons/interpolationCurves/LessonPreviewInterpolationCurves';


function MainPage() {
  const [sidedrawerOpen, setSideDrawerOpen] = useState(true);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const appTheme = useContext(AppThemeContext);

  const allLessons = useRef([
    { name: "Interpolation Curves", unlocked: true, page: "InterpolationCurves", preview: (<LessonPreviewInterpolationCurves />) },
    { name: "Dot Products", unlocked: true, page: "DotProducts", preview: (<LessonPreviewDotProducts />) },
    { name: "Add and Subtract", unlocked: false, page: "AddAndSubtract" },
    { name: "Count to 10", unlocked: false, page: "CountTo10" },
    { name: "Pronounce 'Math'", unlocked: false, page: "PronounceMath" },
  ]);

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
      <SideDrawer sidedrawerOpen={sidedrawerOpen} allOptions={allLessons.current} selectedIndex={selectedLessonIndex} setSelectedIndex={setSelectedLessonIndex} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar sx={{ height: appTheme.appBarHeight }} />
        {allLessons.current[selectedLessonIndex].preview}
      </Box>
    </MainLayout>
  );
}

export default MainPage;