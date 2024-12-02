import React from "react";

import { Box, Typography} from '@mui/material';

import fresnel from'../../assets/dotprod3d/fresnel.png';
import fresnel2 from'../../assets/dotprod3d/fresnel2.png';
import channelMasking from'../../assets/dotprod3d/channel-masking.png';
import grayscale from'../../assets/dotprod3d/grayscale.png';

function QuizDotProduct() {
  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
      
      <Box>
        <h1>
          <strong>Dot Product: </strong> Mastery
        </h1>
        <p>Try to make something cool!</p>
      </Box>

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
    </Box>
  )
}

export default QuizDotProduct;