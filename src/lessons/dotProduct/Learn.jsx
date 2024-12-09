import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

import { Box, Typography } from '@mui/material';
import { StepNavigationButtons } from "../../components/StepNavigationButtons";

import PageNav from "../../components/PageNav";

import fresnel from'../../assets/dotprod3d/fresnel.png';
import fresnel2 from'../../assets/dotprod3d/fresnel2.png';
import channelMasking from'../../assets/dotprod3d/channel-masking.png';
import grayscale from'../../assets/dotprod3d/grayscale.png';


function LearnDotProduct() {
  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
      <StepNavigationButtons
        canGoPrev={false}
        canGoNext={true}
        prevUrl={""}
        nextUrl={"/explore-dot-product"}
        nextText={"Explore"}
      />

      <h1>
        <strong>Dot Product:</strong> Learn
      </h1>

      <Typography variant="body1" align="center" >
        A dot product can be used to learn about the relationship between two vectors.
      </Typography>

      <Box sx={{
        "text-align": "center",
        "margin-top": "1rem"
      }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_0wWcwX3ls8?si=XmEu2ckQoo6sk9bS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <br/>Credit: <a href="https://www.youtube.com/@MahmoudElMansariEN-ze5fo">Mahmoud El Mansari EN</a>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Calculating the Dot Product
        </Typography>
        <MathJaxContext>
          <Box sx={{
            backgroundColor: "#ccc",
            width: "400px",
            margin: "1rem auto",
            padding: "1rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
          }}>
            <MathJax inline dynamic>{"\\( \\vec{A} \\cdot \\vec{B} = A_{x}B_{x} + A_{y}B_{y} + A_{z}B_{z}\\)"}</MathJax>
          </Box>

          <Box sx={{
            backgroundColor: "#ccc",
            width: "400px",
            margin: "1rem auto",
            padding: "1rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
          }}>
            <MathJax inline dynamic>{"\\( \\vec{A} \\cdot \\vec{B} = |A||B|\\cos \\theta \\)"}</MathJax>
          </Box>
        </MathJaxContext>

      </Box>

      <Box sx={{ mt: 4, width: "800px", margin: "2rem auto"}}>
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

      <Box component="section" sx={{ mt: 4, maxWidth: "800px", margin: "5rem auto 0"}}>
        <Typography variant="h4" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
          Dot Product in 3D Graphics
        </Typography>
        <Typography variant="body1" align="left">
          There are a lot of fun shader code you can write using dot product!
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
            Fresnel Shader
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, "flex-flow": 'column' }}>
            <img
              src={fresnel}
              alt="Fresnel Shader"
            />
            <img
              src={fresnel2}
              alt="Fresnel Shader Example"
            />
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
            Channel Masking
          </Typography>
          <img
            src={channelMasking}
            alt="Channel Masking"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
            Grayscale
          </Typography>
          <img
            src={grayscale}
            alt="Grayscale Example"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>

    </Box>
  )
}

export default LearnDotProduct;