import React, { useRef, useEffect } from 'react';
import { Box, Typography, AppBar, Toolbar, Container, Link, Divider } from '@mui/material';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

import ThreeJsDotProductRenderWindow from './ThreeJsDotProductRenderWindow';
import LessonLearnLayout from '../../lessons/LessonLearnLayout';
import {createGameScene} from '../../threejs/dot_product/dotProductEntry';
import QuizItem from '../../components/quizItem';

import dot1 from'../../assets/dotprod3d/dot1.png';
import fresnel from'../../assets/dotprod3d/fresnel.png';
import fresnel2 from'../../assets/dotprod3d/fresnel2.png';
import channelMasking from'../../assets/dotprod3d/channel-masking.png';
import grayscale from'../../assets/dotprod3d/grayscale.png';


function LessonLearnDotProduct() {
  const displayPortRef = useRef(null);

  useEffect(() => {
    console.log('Creating game scene...');
    if (displayPortRef.current) {
      const { scene, camera, renderer } = createGameScene(displayPortRef.current);

      return () => {
        renderer.dispose();
        if (displayPortRef.current) {
          displayPortRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);

  return (
    <LessonLearnLayout pageTitle="Dot Products">
      <MathJaxContext>
        <Box>
          <Container sx={{ mt: 5 }}>
            <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
              <Typography variant="h4" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
                What is a Dot Product?
              </Typography>

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
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Other learning resources
                </Typography>
                
                <Typography variant="body1" align="left" >
                  <a href="https://www.youtube.com/watch?v=a_8DIR6_hhI" target="_blank" >[Youtube] A Crash Course in Dot Produdcts - Math for Game Dev</a>
                  <br/>
                  <a href="https://www.youtube.com/watch?v=_61tlp2kOow" target="_blank">[Youtube] The Basics of Dot Product in Unity URP. Vectors, Angles, and Lighting!</a>
                  <br/>
                  <a href="https://amirazmi.net/dot-products-in-games-and-their-use-cases/" target="_blank">[Website] Dot Products in Games and Their Use Cases</a>
                  <br/>
                  <a href="https://www.mathsisfun.com/algebra/vectors-dot-product.html" target="_blank">[Website] Mathisfun.com - Dot Product</a>
                </Typography>
                
              </Box>
            </Box>

            <Divider />

            {/* ==================================== */}
            {/* Exploration Content */}
            <Box component="section" sx={{ my: 4 }}>
              <Typography variant="h4" gutterBottom align="left" sx={{ fontWeight: 'bold' }} >
                Exploration Content
              </Typography>
              <ThreeJsDotProductRenderWindow />
              <Typography variant="body1" align="left" sx={{ mt: 2 }}>
                Try playing around with this app!
              </Typography>
            </Box>

            <Divider />
            <Box component="section" sx={{ my: 4 }}>
              <Typography variant="h4" gutterBottom align="left" sx={{ fontWeight: 'bold' }} >
                Quiz Time!
              </Typography>
              <QuizItem 
                questionString={"Q1: Vectors A and B are pointing in the same direction. Which of the following equations are true? Check all that apply."}
                imageUrl={dot1}
                choices={[
                  {
                    label: "A • B = |A||B|",
                    isTrue: true
                  },
                  { label: "A • B = 0", isTrue: false },
                  { label: "A • B > 0", isTrue: true },
                  { label: "A • B < 0", isTrue: false }
                ]}
              />
              <QuizItem 
                questionString={"Q2: A and B are unit vectors.  Which of these are possible values for A ⋅ B?  Check all that apply."}
                choices={[
                  { label: "0.5", isTrue: true },
                  { label: "-1", isTrue: true },
                  { label: "1.5", isTrue: false },
                  { label: "0", isTrue: true }
                ]}
              />
            </Box>

            <Divider />

            <Box component="section" sx={{ mt: 4 }}>
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
                    style={{ width: '50%', height: 'auto' }}
                  />
                  <img
                    src={fresnel2}
                    alt="Fresnel Shader Example"
                    style={{ width: '50%', height: 'auto' }}
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
          </Container>
        </Box>
      </MathJaxContext>
    </LessonLearnLayout>
  );
}

export default LessonLearnDotProduct;