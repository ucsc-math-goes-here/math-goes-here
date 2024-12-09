import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';


export const StepNavigationButtons = ({ canGoPrev, canGoNext, nextUrl, prevUrl }) => {
  const navigate = useNavigate();

  const goNext = () => {
    if (canGoNext && nextUrl) {
      navigate(nextUrl);
    }
  }

  const goPrev = () => {
    if (canGoPrev && prevUrl) {
      navigate(prevUrl);
    }
  }

  const goHome = () => {
    navigate("/");
  }

  const firstButton = canGoPrev ? <GoPrevButton onClick={goPrev} /> : <div />;
  const lastButton = canGoNext ? <GoNextButton onClick={goNext} /> :
    <a href="/math-goes-here/" style={{ textDecoration: 'none' }}>
      <HomeButton />
    </a>;

  return (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      {firstButton}
      {lastButton}
    </div>
  );
}


export const GoPrevButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      startIcon={<ArrowBackIcon />}
      style={{ height: "3rem", width: "9rem" }}
    >
      Previous
    </Button>
  );
};

export const GoNextButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      style={{ height: "3rem", width: "9rem" }}
    >
      Next
    </Button>
  );
};

export const HomeButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      endIcon={<HomeIcon />}
      style={{
        height: "3rem", width: "9rem",
        backgroundColor: "#ffbb00",
      }}
    >
      Home
    </Button>
  );
};

