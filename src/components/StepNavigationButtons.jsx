import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';


export const StepNavigationButtons = ({ canGoPrev, canGoNext, nextUrl, prevUrl, nextText, prevText }) => {
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

  const firstButton = canGoPrev ? <GoPrevButton onClick={goPrev} prevText={prevText} /> : <div />;
  const lastButton = canGoNext ? <GoNextButton onClick={goNext} nextText={nextText} /> :
    <a href="/math-goes-here/" style={{ textDecoration: 'none' }}>
      <HomeButton />
    </a>;

  return (
    <div>
      <div style={{height: "50px"}}/>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        {firstButton}
        {lastButton}
      </div>
    </div>
  );
}


export const GoPrevButton = ({ onClick, prevText }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      startIcon={<ArrowBackIcon />}
      style={{ height: "3rem", width: "9rem", textTransform: "none" }}
    >
      {prevText}
    </Button>
  );
};

export const GoNextButton = ({ onClick, nextText }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      style={{ height: "3rem", width: "9rem", textTransform: "none"  }}
    >
      {nextText}
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

