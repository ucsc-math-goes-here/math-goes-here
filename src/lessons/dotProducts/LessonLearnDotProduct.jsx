import React, { useRef, useEffect } from 'react';
import { Box, Typography, AppBar, Toolbar, Container, Link, Divider } from '@mui/material';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

import LessonLearnLayout from '../../lessons/LessonLearnLayout';
import {createGameScene} from '../../threejs/dot_product/dotProductEntry';

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

              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Calculating the Dot Product
                </Typography>
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
                <Typography variant="body1" align="left" sx={{ mt: 2 }}>
                  You can break this equation down to two parts.
                </Typography>

                <Typography variant="h6" align="left" sx={{ mt: 3, fontWeight: 'bold' }}>
                  First part: <MathJax inline dynamic>{"\\( |A||B| \\)"}</MathJax>
                </Typography>
                <Typography variant="body1" align="left" >
                  The first part of the equation tells you about the magnitude of the vectors.
                </Typography>

                <Typography variant="h6" align="left" sx={{ mt: 2, fontWeight: 'bold' }}>
                  Second part: <MathJax inline dynamic>{"\\( \\cos \\theta \\)"}</MathJax>
                </Typography>
                <Typography variant="body1" align="left" >
                  The second part has <MathJax inline dynamic>{"\\( \\cos \\theta \\)"}</MathJax> which results in values between -1 and 1.
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
              <div
                ref={displayPortRef}
                style={{
                  width: '100%',
                  height: 450,
                  backgroundColor: '#e0e0e0',
                  display: 'block',
                }}
              ></div>
              <Typography variant="body1" align="left" sx={{ mt: 2 }}>
                Try playing around with this app!
              </Typography>
            </Box>

            <Divider />

            <Box component="section" sx={{ mt: 4 }}>
              <Typography variant="h4" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
                Dot Product in 3D Graphics
              </Typography>
              <Typography variant="body1" align="left">
                There's a lot of fun shader code you can write using dot product!
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Fresnel Shader
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img
                    src="../asset/dotprod3d/fresnel.png"
                    alt="Fresnel Shader"
                    style={{ width: '50%', height: 'auto' }}
                  />
                  <img
                    src="../asset/dotprod3d/fresnel2.png"
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
                  src="../asset/dotprod3d/channel-masking.png"
                  alt="Channel Masking"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h5" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Grayscale
                </Typography>
                <img
                  src="../asset/dotprod3d/grayscale.png"
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