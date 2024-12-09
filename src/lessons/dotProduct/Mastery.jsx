import React from "react";

import { Box, Button} from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

import PageNav from "../../components/PageNav";
import { StepNavigationButtons } from "../../components/StepNavigationButtons";

function QuizDotProduct() {
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
      
      <Box>
        <h1>
          <strong>Dot Product: </strong> Master
        </h1>
      </Box>
    

      <Box sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem"
        }}
      >
        <Box>
          <iframe width="500px" height="400" src="https://scratch.mit.edu/projects/1106303386/embed" title="Scratch Project Embed"></iframe>
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
            Try Using Dot Proudct!
          </h2>

          <p>
            Calculate the dot product and the threshold so that <br/>
            if the Dot Product greater than Threshold, the bat is seen.
          </p>

          <Button variant="contained" href="https://scratch.mit.edu/projects/1107880402/editor/" target="_blank">Try it out on Scratch!&nbsp;<OpenInNew/></Button>
        </Box>
      </Box>

    </Box>
  )
}

export default QuizDotProduct;