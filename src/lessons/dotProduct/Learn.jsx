import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

import { Box, Typography } from '@mui/material';
import { StepNavigationButtons } from "../../components/StepNavigationButtons";


function LearnDotProduct() {
  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
      <h1>
        <strong>Dot Product:</strong> Learn
      </h1>

      <Typography variant="body1" align="left" >
        A dot product can be used to learn about the relationship between two vectors.
      </Typography>

      <Box sx={{
        "text-align": "left",
        "margin-top": "1rem"
      }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_0wWcwX3ls8?si=XmEu2ckQoo6sk9bS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
          Calculating the Dot Product
        </Typography>
        <MathJaxContext>
          <Box sx={{
            backgroundColor: "#ccc",
            width: "400px",
            margin: 0,
            "margin-bottom": "1rem",
            // margin: "auto",
            padding: "1rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
          }}>
            <MathJax inline dynamic>{"\\( \\vec{A} \\cdot \\vec{B} = A_{x}B_{x} + A_{y}B_{y} + A_{z}B_{z}\\)"}</MathJax>
          </Box>

          <Box sx={{
            backgroundColor: "#ccc",
            width: "400px",
            margin: 0,
            // margin: "auto",
            padding: "1rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
          }}>
            <MathJax inline dynamic>{"\\( \\vec{A} \\cdot \\vec{B} = |A||B|\\cos \\theta \\)"}</MathJax>
          </Box>
        </MathJaxContext>

      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
          Other learning resources
        </Typography>

        <Typography variant="body1" align="left" >
          <a href="https://www.youtube.com/watch?v=a_8DIR6_hhI" target="_blank" >[Youtube] A Crash Course in Dot Produdcts - Math for Game Dev</a>
          <br />
          <a href="https://www.youtube.com/watch?v=_61tlp2kOow" target="_blank">[Youtube] The Basics of Dot Product in Unity URP. Vectors, Angles, and Lighting!</a>
          <br />
          <a href="https://amirazmi.net/dot-products-in-games-and-their-use-cases/" target="_blank">[Website] Dot Products in Games and Their Use Cases</a>
          <br />
          <a href="https://www.mathsisfun.com/algebra/vectors-dot-product.html" target="_blank">[Website] Mathisfun.com - Dot Product</a>
        </Typography>
      </Box>

      <StepNavigationButtons
        canGoPrev={false}
        canGoNext={true}
        prevUrl={""}
        nextUrl={"/explore-dot-product"}
      />
    </Box>
  )
}

export default LearnDotProduct;