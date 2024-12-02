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
  return (
    <LessonLearnLayout pageTitle="Dot Products">
      <MathJaxContext>
        <Box>
          <Container sx={{ mt: 5 }}>
            

            <Divider />

            {/* ==================================== */}
            {/* Exploration Content */}
            

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