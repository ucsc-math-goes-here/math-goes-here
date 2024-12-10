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

      <Typography variant="body1" style={{maxWidth:'700px', textAlign:'start', justifySelf:'center'}} >
      
        <p>From the beautiful graphics to the realistic physics to the challenging enemy behaviors, the vector dot product is used all over video games. </p>

        <p>Watch this video to learn more. To try an interactive demo, click <a href="./explore-dot-product"><strong>Explore</strong></a>.</p>
     
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
          For Further Investigation
        </Typography>

        <Typography variant="body1" align="left" >
          Here are some more ways to learn about the dot product. <br/>
          <a href="https://www.youtube.com/watch?v=a_8DIR6_hhI" target="_blank" >[Youtube] A Crash Course in Dot Produdcts - Math for Game Dev</a>
          <br />
          <a href="https://www.youtube.com/watch?v=_61tlp2kOow" target="_blank">[Youtube] The Basics of Dot Product in Unity URP. Vectors, Angles, and Lighting!</a>
          <br />
          <a href="https://amirazmi.net/dot-products-in-games-and-their-use-cases/" target="_blank">[Website] Dot Products in Games and Their Use Cases</a>
          <br />
          <a href="https://www.mathsisfun.com/algebra/vectors-dot-product.html" target="_blank">[Website] Mathisfun.com - Dot Product</a>
        </Typography>
      </Box>

      <Box component="section" sx={{ mt: 4, maxWidth: "800px", margin: "5rem auto 0", textAlign: "left"}}>
        <Typography variant="h4" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
          Dot Product in 3D Graphics
        </Typography>
        <Typography variant="body1" align="left">
          Dot Product is commonly used in shaders to find the relations between a light or view vector against the surface normal.
          <br/>
          Here are some Unreal Engine Shader examples.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
            Fresnel Shader
          </Typography>
          <Box sx={{ mt: 3 }}>
            <img
              src={fresnel}
              alt="Fresnel Shader"
              style={{ width: '100%' }}
            />
            <p>By calculating the dot product of the camera vector and the surface normal, you can use the scalar result to assign a different color value.</p>
            <img
              src={fresnel2}
              alt="Fresnel Shader Example"
              style={{ width: '100%' }}
            />
            <p>You can exaggerate the result with a power node to create an interesting effect!</p>
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
          <p>You can also use the dot product to mask specific channels. It'll perform the dot product with the RGB value and will give back a scalar value on how far the value is from, say, Blue (0,0,1). See in this example, green and red have turned black.</p>
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
          <p>You can use the RGB values as a vector to flatten to color to a scalar value using the dot product. You can adjust the vector used on the dot product (in the image above, a lime color RGB vector) to make sure the grayscale value isn't too dark or light.</p>
        </Box>
      </Box>

    </Box>
  )
}

export default LearnDotProduct;