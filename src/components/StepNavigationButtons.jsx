import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

const stepsData = [
  { label: "Learn" },
  { label: "Explore" },
  { label: "Reflect" },
  { label: "Master" },
];

export const StepNavigationBar = ({ stepPaths = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Find the active step based on the current path
  const activeStep = stepPaths.findIndex(path => location.pathname === path);

  const handleStep = (index) => {
    if (index !== activeStep && stepPaths[index]) {
      navigate(stepPaths[index]);
      window.scrollTo(0,0);
    }
  };

  return (
    <div style={{ width: "100%", margin: "24px 0" }}>
      <Stepper activeStep={activeStep} nonLinear alternativeLabel>
        {stepsData.map((step, index) => (
          <Step key={step.label} >
            <StepButton onClick={() => handleStep(index)} >
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};


export const StepNavigationButtons = ({ canGoPrev, canGoNext, nextUrl, prevUrl, nextText, prevText }) => {
  const navigate = useNavigate();

  const goNext = () => {
    if (canGoNext && nextUrl) {
      navigate(nextUrl);
      window.scrollTo(0,0);
    }
  }

  const goPrev = () => {
    if (canGoPrev && prevUrl) {
      navigate(prevUrl);
      window.scrollTo(0,0);
    }
  }

  const goHome = () => {
    navigate("/");
    window.scrollTo(0,0);
  }

  const firstButton = canGoPrev ? <GoPrevButton onClick={goPrev} prevText={prevText} /> : <div />;
  const lastButton = canGoNext ? <GoNextButton onClick={goNext} nextText={nextText} /> :
    <a href="/math-goes-here/" style={{ textDecoration: 'none' }}>
      <HomeButton />
    </a>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", alignSelf: "center", margin: "0 auto" }}>
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

