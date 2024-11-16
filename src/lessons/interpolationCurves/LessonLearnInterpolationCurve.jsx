import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MainLayout from '../../components/MainLayout';
import HeaderBarContent from '../../components/HeaderBarContent';
import HomeButton from '../../components/HomeButton';

function LessonLearnInterpolationCurve() {
  const homeButton = (
    <div style={{ position: "absolute", left: 0, bottom: 20 }}>
      <HomeButton />
    </div>
  );
  const headbarElement = (
    <HeaderBarContent leftChildren={homeButton}>
      <Typography variant="h5" component="div">
        Interpolation Curves
      </Typography>
      <div style={{ height: 20 }} />
      <Typography variant="h3" component="div">
        - LEARN -
      </Typography>
    </HeaderBarContent>
  );

  return (
    <MainLayout headbarElement={headbarElement}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Typography variant="h3" component="div">
          Say HIHIHI!!!
        </Typography>
      </Box>
    </MainLayout>
  );
}

export default LessonLearnInterpolationCurve;