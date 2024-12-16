import React, { useState, useContext, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import {Box, Button} from '@mui/material';

import { AppThemeContext } from '../contexts/AppThemeContext';
import MainLayout from './MainLayout';
import LandingPage from './LandingPage';
import LessonPreviewDotProduct from '../lessons/dotProduct/LessonPreviewDotProduct';
import LessonPreviewInterpolationCurves from '../lessons/interpolationCurves/LessonPreviewInterpolationCurves';


function MainPage() {
  const [sidedrawerOpen, setSideDrawerOpen] = useState(true);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const appTheme = useContext(AppThemeContext);

  const allLessons = useRef([
    { name: "Interpolation Curves", unlocked: true, page: "interpolationcurves", preview: (<LessonPreviewInterpolationCurves />) },
    { name: "Dot Products", unlocked: true, page: "dotproduct", preview: (<LessonPreviewDotProduct />) },
    { name: "Add and Subtract", unlocked: false, page: "addandsubtract" },
    { name: "Count to 10", unlocked: false, page: "countto10" },
    { name: "Pronounce 'Math'", unlocked: false, page: "pronouncemath" },
  ]);

  const toggleSideDrawer = () => {
    setSideDrawerOpen(!sidedrawerOpen);
  };

  return (
    <MainLayout toggleSideDrawer={toggleSideDrawer}>
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1
        }}>
        <LandingPage />
      </Box>
    </MainLayout>
  );
}

export default MainPage;