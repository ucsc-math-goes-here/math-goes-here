import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

import { Box, Typography } from '@mui/material';
import { StepNavigationBar, StepNavigationButtons } from "../../components/StepNavigationButtons";

import PageNav from "../../components/PageNav";

import calculate from '../../assets/dotprod3d/calculate_example.png';
import fresnel from '../../assets/dotprod3d/fresnel.png';
import fresnel2 from '../../assets/dotprod3d/fresnel2.png';
import channelMasking from '../../assets/dotprod3d/channel-masking.png';
import grayscale from '../../assets/dotprod3d/grayscale.png';


const LearnDotProduct = () => {
  const [graphicsOpen, setGraphicsOpen] = React.useState(false);

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

      <Typography variant="h3" component="h1" gutterBottom >
        <strong>Dot Product:</strong> Learn
      </Typography>

      <Typography variant="body1" style={{ maxWidth: '700px', textAlign: 'start', justifySelf: 'center' }} >
        From the beautiful graphics to the realistic physics to the challenging enemy behaviors, the vector dot product is used all over video games. 
      </Typography>

      <Box sx={{
        "textAlign": "center",
        "marginTop": "1rem"
      }}>
        <Typography variant="body1" component="p">
          Here's a YouTube creator explaining dot products in video games:
        </Typography>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/_0wWcwX3ls8?si=XmEu2ckQoo6sk9bS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

        <Typography variant="caption" component="div">
          Credit: <a href="https://www.youtube.com/@MahmoudElMansariEN-ze5fo">Mahmoud El Mansari EN</a>
        </Typography>
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

          <Box sx={{ textAlign: 'start', justifySelf: 'center', lineHeight: 1.5 }} >
            <Typography variant="body1" component="div">
              Let's look at an example: <br />
              <img width="780px" src={calculate} alt="Two vectors A=(4,3) and B=(12,5) are 14.25 degrees apart." /><br />
              To calculate the dot product <MathJax inline dynamic>{"\\( \\vec{A} \\cdot \\vec{B} \\)"}</MathJax>:<br />
              We can calculate:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MathJax inline dynamic>{"\\( A_{x}B_{x} + A_{y}B_{y} = 4 \\cdot 12 + 3 \\cdot 5 = 63 \\)"}<br /></MathJax>
              Or we can calculate: &nbsp;&nbsp;&nbsp;
              <MathJax inline dynamic>{"\\( |A||B|\\cos \\theta \\ = 5 \\cdot 13 \\cdot 0.969... = 63 \\)"}</MathJax>.
            </Typography>

            <Typography variant="body1" component="p">
              If any one of these pieces of information are unknown, we can solve for it using these two equations.
            </Typography>
          </Box>
        </MathJaxContext>

      </Box>

      <Box sx={{ mt: 4, width: "800px", margin: "2rem auto" }}>
        <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
          For Further Investigation
        </Typography>

        <Typography variant="body1" align="left" component="div">
          Here are some more ways to learn about the dot product. <br />
          <a href="https://www.youtube.com/watch?v=a_8DIR6_hhI" target="_blank" >[Youtube] A Crash Course in Dot Produdcts - Math for Game Dev</a>
          <br />
          <a href="https://www.youtube.com/watch?v=_61tlp2kOow" target="_blank">[Youtube] The Basics of Dot Product in Unity URP. Vectors, Angles, and Lighting!</a>
          <br />
          <a href="https://amirazmi.net/dot-products-in-games-and-their-use-cases/" target="_blank">[Website] Dot Products in Games and Their Use Cases</a>
          <br />
          <a href="https://www.mathsisfun.com/algebra/vectors-dot-product.html" target="_blank">[Website] Mathisfun.com - Dot Product</a>
          <br />
          <br />
          To try an interactive demo of the dot product, click <a href="./explore-dot-product"><strong>Explore</strong></a>.
        </Typography>

        <StepNavigationButtons
          canGoPrev={false}
          canGoNext={true}
          prevUrl={""}
          nextUrl={"/explore-dot-product"}
          nextText={"Explore"}
        />

      </Box>

      <Box
        id="Graphics"
        component="section"
        sx={{
          mt: -20,
          maxWidth: "800px",
          margin: "1rem auto 0",
          textAlign: "left",
          cursor: "pointer",
          "&:hover": { boxShadow: (graphicsOpen) ? 0 : 4 }
        }}
        onClick={() => setGraphicsOpen((open) => !open)}
        aria-expanded={graphicsOpen}
        tabIndex={0}
        role="button"
      >
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          sx={{ fontWeight: 'bold', userSelect: "none", display: "flex", alignItems: "center" }}
        >
          <span style={{ marginRight: 8 }}>{graphicsOpen ? "▼" : "▶"}</span>
          Dot Product in 3D Graphics
        </Typography>
        {!graphicsOpen && 
          <Typography variant="body1" align="left">
            Expand this to see some examples of how the dot product is used in Unreal Engine shaders
          </Typography>
        }
        {graphicsOpen && (
          <>
            <Typography variant="body1" align="left">
              Dot Product is commonly used in shaders to find the relations between a light or view vector against the surface normal.
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
                <Typography variant="body2" component="p">
                  By calculating the dot product of the camera vector and the surface normal, you can use the scalar result to assign a different color value.
                </Typography>
                <img
                  src={fresnel2}
                  alt="Fresnel Shader Example"
                  style={{ width: '100%' }}
                />
                <Typography variant="body2" component="p">
                  You can exaggerate the result with a power node to create an interesting effect!
                </Typography>
              </Box>
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
              <Typography variant="body2" component="p">
                We can treat the RGB values of a pixel like a vector, and use a dot product with a constant vector to get a greyscale value that is a linear combination of those chanels. In this example, we're using a lime color to give the green channel more weight. 
              </Typography>
            </Box>
            <StepNavigationButtons
              canGoPrev={false}
              canGoNext={true}
              prevUrl={""}
              nextUrl={"/explore-dot-product"}
              nextText={"Explore"}
            />
          </>
        )}
      </Box>

    </Box>
  )
}

export default LearnDotProduct;