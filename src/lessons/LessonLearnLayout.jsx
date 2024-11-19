import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MainLayout from '../components/MainLayout';
import HeaderBarContent from '../components/HeaderBarContent';
import HomeButton from '../components/HomeButton';

function LessonLearnLayout({ children, pageTitle }) {
  const homeButton = (
    <div style={{ position: "absolute", left: 0, bottom: 20 }}>
      <HomeButton />
    </div>
  );
  const headbarElement = (
    <HeaderBarContent leftChildren={homeButton}>
      <Typography variant="h5" component="div">
        {pageTitle}
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
        {children}
      </Box>
    </MainLayout>
  );
}

export default LessonLearnLayout;