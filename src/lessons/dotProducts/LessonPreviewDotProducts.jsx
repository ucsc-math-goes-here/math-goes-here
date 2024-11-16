import React, { useState, useContext } from 'react';

import Typography from '@mui/material/Typography';


function LessonPreviewDotProducts() {
  return (
    <div>
      <Typography variant="h3" component="div">
        Some Preview Things Here
      </Typography>
      <div style={{ height: '20px' }} />
      <Typography>
        Interpolation curves connect data points smoothly, widely used in animations and graphics. Learn key types like linear and spline interpolation with practical examples.
      </Typography>
    </div>
  );
}

export default LessonPreviewDotProducts;