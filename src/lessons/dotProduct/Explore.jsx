import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { StepNavigationBar, StepNavigationButtons } from "../../components/StepNavigationButtons";


import { Box, Typography } from '@mui/material';

import ThreeJsDotProductRenderWindow from './ThreeJsDotProductRenderWindow';
import PageNav from "../../components/PageNav";

const ExploreDotProduct = () => {
  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
      <StepNavigationBar 
        stepPaths={[
          "/learn-dot-product", 
          "/explore-dot-product", 
          "/reflect-dot-product", 
          "/master-dot-product"
        ]} 
      />
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          <strong>Dot Product: </strong> Explore
        </Typography>
 
        <Typography  style={{maxWidth:'780px', textAlign:'start', justifySelf:'center'}} >
        
          This demo shows how the dot product is used to determine the brightness of the light hitting a surface.    
      
        <br />
        <br />Use the <strong>Sun Direction</strong> and <strong>Elevation</strong> sliders to set the position of the light source.
        <br/>Use the <strong>Ground Angle</strong> joystick tilt the ground. 
        <br/><strong>Click and Drag</strong> to move the camera. 

        <br /> 
        <br />

          Notice how the <em>brightness</em> of the surface is affected by the dot product between the <em>light vector</em> and the <em>surface normal</em>. 
          As the surface tilts away from the sun, it becomes darker.

         <br /> 
        <br />
        Then turn on the <strong>Plane Normal</strong>, <strong>Direction to Light</strong>, and <strong>Dot Product</strong> options to see how the math works.
         

        </Typography>
      </Box>

      <Box component="section" sx={{ mt: 2, mb: 6  }}>
        <ThreeJsDotProductRenderWindow />
      </Box>

        <Typography  style={{maxWidth:'780px', textAlign:'left', justifySelf:'center'}} >

        To go back, click <a href="./learn-dot-product"><strong>Learn</strong></a>. <br/>
        When you're ready to test your knowledge, click <a href="./reflect-dot-product"><strong>Reflect</strong></a>.
        </Typography>

      <Box sx={{ mt: 4 }} />
      
      <StepNavigationButtons 
        canGoPrev={true}
        canGoNext={true}
        prevUrl={"/learn-dot-product"}
        nextUrl={"/reflect-dot-product"}
        nextText="Reflect"
        prevText="Learn"
      />



    </Box>
  )
}

export default ExploreDotProduct;