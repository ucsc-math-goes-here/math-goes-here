import React from "react";

import { Box, Button} from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

import fresnel from'../../assets/dotprod3d/fresnel.png';
import fresnel2 from'../../assets/dotprod3d/fresnel2.png';
import channelMasking from'../../assets/dotprod3d/channel-masking.png';
import grayscale from'../../assets/dotprod3d/grayscale.png';

function QuizDotProduct() {
  return (
    <Box 
      component="section" 
      sx={{ 
        mb: 4,
        alignContent: "start",
        justifyContent: "start",
      }}>
      
      <Box>
        <h1>
          <strong>Dot Product: </strong> Master
        </h1>
      </Box>

      <Box sx={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: "2rem"
        }}
      >
        <Box>
          <iframe width="500px" height="400" src="https://scratch.mit.edu/projects/1106303386/embed" title="Scratch Project Embed"></iframe>
        </Box>
        <Box
          sx={{
            textAlign: "left"
          }}
        >

          <h2 
            style={{
              marginTop: 0
            }}
          >
            Try Using Dot Proudct!
          </h2>

          <p>
            Calculate the dot product and the threshold so that <br/>
            if the Dot Product greater than Threshold, the bat is seen.
          </p>

          <Button variant="contained" href="https://scratch.mit.edu/projects/1107880402/editor/" target="_blank">Try it out on Scratch!&nbsp;<OpenInNew/></Button>
        </Box>
      </Box>

      {/* <Box component="section" sx={{ mt: 4 }}>
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
      </Box> */}
    </Box>
  )
}

export default QuizDotProduct;