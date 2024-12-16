import React, { useState, useContext } from 'react';

import Typography from '@mui/material/Typography';


const LessonPreviewDotProduct = () => {
  return (
    <div>
      <Typography variant="h3" component="div">
        Some Preview Things Here
      </Typography>
      <div style={{ height: '20px' }} />
      <Typography>
        The dot product links vectors, revealing angles and projections. Discover its calculation, meaning, and applications in geometry and physics.
      </Typography>
    </div>
  );
}

export default LessonPreviewDotProduct;