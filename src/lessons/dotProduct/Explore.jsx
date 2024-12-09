import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { StepNavigationButtons } from "../../components/StepNavigationButtons";


import { Box, Typography } from '@mui/material';

import ThreeJsDotProductRenderWindow from './ThreeJsDotProductRenderWindow';
import PageNav from "../../components/PageNav";

function ExploreDotProduct() {
  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
      <Box>
        <h1>
          <strong>Dot Product: </strong> Explore
        </h1>
        <p>
          Explore Dot Product!
        </p>
      </Box>

      <Box component="section" sx={{ my: 4 }}>
        <ThreeJsDotProductRenderWindow />
      </Box>

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