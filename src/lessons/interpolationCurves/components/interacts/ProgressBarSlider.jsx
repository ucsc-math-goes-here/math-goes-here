import React, { useState } from 'react';
import { Slider, Box } from '@mui/material';

function ProgressBarSlider({ value = 0, setValue = () => { } }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Slider
        value={value}
        min={0}
        max={1}
        step={0.01}
        onChange={handleChange}
        sx={{
          width: '100%',
          height: 10,
          '& .MuiSlider-thumb': {
            width: 20,
            height: 20,
            backgroundColor: '#fff',
            border: '2px solid #1976d2',
            transition: 'none',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#e0e0e0',
            opacity: 1,
            transition: 'none',
          },
          '& .MuiSlider-track': {
            backgroundColor: '#1976d2',
            transition: 'none',
          },
        }}
      />
    </Box>
  );
}

export default ProgressBarSlider;