import React from "react";

import { Box, Button, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

import PageNav from "../../components/PageNav";
import { StepNavigationBar, StepNavigationButtons } from "../../components/StepNavigationButtons";

const QuizDotProduct = () => {
  return (
    <Box
      component="section"
      sx={{
        mb: 4,
        alignContent: "start",
        justifyContent: "start",
      }}>
      <StepNavigationBar 
        stepPaths={[
          "/learn-dot-product", 
          "/explore-dot-product", 
          "/reflect-dot-product", 
          "/master-dot-product"
        ]} 
      />

      <Box
        sx={{
          marginBottom: "3rem"
        }}
      >
      <Typography variant="h3" component="h1" gutterBottom >
          <strong>Dot Product: </strong> Master
        </Typography>
      </Box>


      <Box sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",

      }}
      >
        <Box>
          
          <iframe width="500px" height="400" src="https://scratch.mit.edu/projects/1193547730/embed" title="Scratch Project Embed"></iframe>
          <Box sx={{ width: '480px', textAlign: 'start', justifySelf: 'center' }} >

            To see the working version of the demo, go back to <a href="./explore-dot-product"><strong>Explore</strong></a>.
            <p>Click on the <strong>green flag</strong> to try it out!<br />
              Use the <strong>sliders</strong> to change the cat's field of vision.  <br />
              <strong>Click and Drag</strong> to move the bat around.
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "left"
          }}
        >

      <Typography variant="h3" component="h2" gutterBottom >
          Oh No!
        </Typography>
            Our vision cone demo is broken!

          <p>
            Use your dot product knowledge to fix it!
          </p>
          <p>
            Click the button when you are ready.
          </p>

          <Button variant="contained" href="https://scratch.mit.edu/projects/1193547730/editor/" target="_blank">Try it out on Scratch!&nbsp;<OpenInNew /></Button>
        </Box>
      </Box>

   <StepNavigationButtons
        canGoPrev={true}
        canGoNext={false}
        prevUrl={"/reflect-dot-product"}
        nextUrl={""}
        prevText={"Reflect"}
      />


    </Box>
  )
}

export default QuizDotProduct;