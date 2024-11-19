import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function HomeButton() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  }

  return (
    <IconButton onClick={navigateToHome} sx={{ height: "60px", width: "60px", color: "white" }}>
      <HomeRoundedIcon sx={{ width: "100%", height: "100%" }} />
    </IconButton>
  );
}

export default HomeButton;