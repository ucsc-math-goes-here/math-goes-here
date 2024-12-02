import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

import { Box, Typography} from '@mui/material';

import ThreeJsDotProductRenderWindow from './ThreeJsDotProductRenderWindow';

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
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          Try playing around with this app!
        </Typography>
      </Box>
    </Box>
  )
}

export default ExploreDotProduct;