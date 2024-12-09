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
      <Box   >
        <h1>Math Goes Here:</h1>
        <h2>Math For Game Developers</h2>

        <Box className="intro"style={{maxWidth:'780px'}} justifySelf='center'>     
        <p>This website is a place to learn math concepts used in video games. </p>
        <p>It's designed to help game programmers, game designers, technical artists, 
        or anyone else who thinks video games are a fun way to learn math.</p> 

        <p>Each of our lessons has four sections:</p>
        <h3>Learn</h3>
        Read articles and watch videos about the topic. We've gathered materials from around the internet for you to peruse. 
        <h3>Explore</h3>
        Go deeper into the topic with an interactive demo.         
      
        <h3>Reflect</h3>
        Take a moment to think about the topic and check your understanding.  

        <h3>Master</h3>
        Demonstrate your knowledge through a small game developement project.  

        <p>We have one topic for you to try, and more on the way!</p>
        </Box>

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
            // href="./learn-interpolation-curves"
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