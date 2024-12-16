import React from "react";

import { Box, Button, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

import PageNav from "../../components/PageNav";
import { StepNavigationButtons } from "../../components/StepNavigationButtons";

const QuizDotProduct = () => {
  return (
    <Box
      component="section"
      sx={{
        mb: 4,
        alignContent: "start",
        justifyContent: "start",
      }}>
      <StepNavigationButtons
        canGoPrev={true}
        canGoNext={false}
        prevUrl={"/reflect-dot-product"}
        nextUrl={""}
        prevText={"Reflect"}
      />

      <Box
        sx={{
          marginBottom: "3rem"
        }}
      >
        <h1>
          <strong>Dot Product: </strong> Master
        </h1>
      </Box>


      <Box sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",

      }}
      >
        <Box>
          <iframe width="500px" height="400" src="https://scratch.mit.edu/projects/1106303386/embed" title="Scratch Project Embed"></iframe>
          <Box sx={{ width: '480px', textAlign: 'start', justifySelf: 'center' }} >
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

          <h2
            style={{
              marginTop: 0
            }}
          >
            Put Your Dot Product Knowledge to Work!
          </h2>

          <p>
            In this project, you'll use a dot product to determine whether one character can see another, given its limited field of view.
            This page shows a working solution.
          </p>
          <p>
            Click the button when you are ready to make your own version!
          </p>

          <Button variant="contained" href="https://scratch.mit.edu/projects/1107917471/" target="_blank">Try it out on Scratch!&nbsp;<OpenInNew /></Button>
        </Box>
      </Box>

    </Box>
  )
}

export default QuizDotProduct;