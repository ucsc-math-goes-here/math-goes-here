import React, { useState, useContext } from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Link
} from '@mui/material';

import { useMediaQuery } from "react-responsive";

import figure from '../assets/math_goes_here.png';
import player from '../assets/player.png'

function LandingPage() {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <Box>
      <Box   >
        <h1 style={{marginBottom:0, marginTop:0}}>Math Goes Here:</h1>
        <h2>Math For Game Developers</h2>

        <Box className="intro" style={{maxWidth:'780px'}} justifySelf='center'> 
        <p style={{textAlign:'center'}}>Video game creators use math to turn their ideas into reality.</p>
        <img width="780px" justifySelf='center'  src={figure} alt="In between design and gameplay there's a box that reads 'math goes here'" />

        <p style={{marginTop:0}} >This website is a place to learn math concepts used in video games. </p>
        <p>It's designed to help game programmers, game designers, technical artists, 
        or anyone else who thinks video games are a fun way to learn math.</p> 

        <p style={{marginBottom:0}}>Each of our lessons has four sections:</p>
        <Box component="section" sx={{display:'grid',  gridTemplateColumns: isMobile? '100%' :'70% 30%', marginTop:0, marginBottom:0}} >
        <Box >
        <h3>Learn</h3>
        Read articles and watch videos about the topic. We've gathered materials from around the internet for you to peruse. 
        <h3>Explore</h3>
        Go deeper into the topic with an interactive demo.         
      
        <h3>Reflect</h3>
        Take a moment to think about the topic and check your understanding.  

        <h3>Master</h3>
        Demonstrate your knowledge through a small game developement project.  
        </Box>
        <Box>
        <img width="360px" src={player} alt="A cartoon illustration of a person playing a game on a pc"/>

        </Box>
        </Box>

        <p>We have one topic for you to try, and more on the way!</p>
        </Box>

        </Box>
       
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          maxWidth: "800px",
          margin: "2rem auto 0"
        }}
      >
        <Card className="landing-page-card" variant="outlined">
          <CardActionArea 
            href="./learn-dot-product"
            sx={{
              color: "black"
            }}
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
            disabled
            sx={{
              color: "grey"
            }}
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

      <Box
        sx={{
          marginTop: "2rem"
        }}
      >
        {/* Footer */}
        <Link href="/math-goes-here/credits">Credits</Link>
      </Box>
    </Box>
  );
}

export default LandingPage;