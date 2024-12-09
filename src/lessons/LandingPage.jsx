import React, { useState, useContext } from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material';


function LandingPage() {
  return (
    <Box>
      <Box>
        <h1>Math Goes Here</h1>
        <p>Please choose a lesson!</p>
      </Box>
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          maxWidth: "1000px",
          margin: "auto"
        }}
      >
        <Card className="landing-page-card" variant="outlined">
          <CardActionArea 
            href="./learn-dot-product"
          >
            <CardContent>
              <h2>Dot Product</h2>
              <p>Learn about Dot Product!</p>
            </CardContent>
          </CardActionArea>
        </Card>
        
        <Card className="landing-page-card" variant="outlined">
          <CardActionArea
            href="./learn-interpolation-curves"
          >
            <CardContent>
              <h2>Interpolation</h2>
              <p>Learn about Interpolation!
                <br/>
                (Under Construction)
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
    
  );
}

export default LandingPage;