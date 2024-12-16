import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { StepNavigationButtons } from "../../components/StepNavigationButtons";


import { Box, Typography } from '@mui/material';

import ThreeJsDotProductRenderWindow from './ThreeJsDotProductRenderWindow';
import PageNav from "../../components/PageNav";

function ExploreDotProduct() {
  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
        <StepNavigationButtons
        canGoPrev={true}
        canGoNext={true}
        prevUrl={"/learn-dot-product"}
        nextUrl={"/reflect-dot-product"}
        nextText="Reflect"
        prevText="Learn"
      />
      <Box>
        <h1>
          <strong>Dot Product: </strong> Explore
        </h1>
 
        <Typography  style={{maxWidth:'780px', textAlign:'start', justifySelf:'center'}} >
        <p>
          This demo shows how the dot product is used to determine the brightness of the light hitting a surface.    
        </p>
        <p>Use the <strong>Azimuth</strong> and <strong>Elevation</strong> sliders to set the position of the light source.
        <br/>Use the <strong>Ground Angle</strong> joystick tilt the ground. 
        <br/><strong>Click and Drag</strong> to move the camera. 
        </p>

        <p>
          Notice how the <em>brightness</em> of the surface is affected by the dot product between the <em>light vector</em> and the <em>surface normal</em>. 
          As the surface tilts away from the sun, it becomes darker.
        </p>

        <p>If you want to learn more about the dot product, click <a href="./learn-dot-product"><strong>Learn</strong></a>. <br/>
        When you're ready to test your knowledge, click <a href="./reflect-dot-product"><strong>Reflect</strong></a>.</p>


 
        </Typography>
      </Box>

      <Box component="section" sx={{ my: 4 }}>
        <ThreeJsDotProductRenderWindow />
      </Box>

    </Box>
  )
}

export default ExploreDotProduct;