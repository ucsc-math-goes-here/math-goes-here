import React from "react";

import { Box, Typography} from '@mui/material';

import QuizItem from '../../components/quizItem';

import dot1 from'../../assets/dotprod3d/dot1.png';

function QuizDotProduct() {
  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
      
      <Box>
        <h1>
          <strong>Dot Product: </strong> Quiz
        </h1>
        <p>Test your understanding of Dot Product through these quiz questions!</p>
      </Box>

      <Box component="section" sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom align="left" sx={{ fontWeight: 'bold' }} >
          Quiz Time!
        </Typography>
        <QuizItem 
          questionString={"Q1: Vectors A and B are pointing in the same direction. Which of the following equations are true? Check all that apply."}
          imageUrl={dot1}
          choices={[
            { label: "A • B = |A||B|", isTrue: true },
            { label: "A • B = 0", isTrue: false },
            { label: "A • B > 0", isTrue: true },
            { label: "A • B < 0", isTrue: false }
          ]}
          explaination={"The cosine in the equation ends up becoming 1 from cos(0). This also means the resulting value has to be positive."}
        />
        <QuizItem 
          questionString={"Q2: A and B are unit vectors.  Which of these are possible values for A • B?  Check all that apply."}
          choices={[
            { label: "0.5", isTrue: true },
            { label: "-1", isTrue: true },
            { label: "1.5", isTrue: false },
            { label: "0", isTrue: true }
          ]}
          explaination={"That makes |A||B| portion of the calculation become 1. Therefore any values between -1 and 1 are possible."}
        />
      </Box>
    </Box>
  )
}

export default QuizDotProduct;