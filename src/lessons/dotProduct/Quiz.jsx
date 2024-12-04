import React from "react";

import { Box, Typography} from '@mui/material';

import QuizItem from '../../components/quizItem';

import dot1 from '../../assets/dotprod3d/dot1.png';

function QuizDotProduct() {
  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>
      
      <Box>
        <h1>
          <strong>Dot Product: </strong> Reflect
        </h1>
        <p>Test your understanding of Dot Product through these quiz questions!</p>
      </Box>

      <Box component="section" sx={{ my: 4 }}>
        <QuizItem 
          questionString={"Q1: Vectors A and B are pointing in the same direction. Which of the following equations are true? Check all that apply."}
          imageUrl={dot1}
          choices={[
            { label: "A • B = |A||B|", isTrue: true },
            { label: "A • B = 0", isTrue: false },
            { label: "A • B > 0", isTrue: true },
            { label: "A • B < 0", isTrue: false }
          ]}
          explanation={"When two vectors have the same direction, the dot product is the product of their magnitudes, which is always positive."}
        />
        <QuizItem 
          questionString={"Q2: A and B are unit vectors.  Which of these are possible values for A • B?  Check all that apply."}
          choices={[
            { label: "0.5", isTrue: true },
            { label: "-1", isTrue: true },
            { label: "1.5", isTrue: false },
            { label: "0", isTrue: true }
          ]}
          explanation={"Since |A| = |B| = 1, the dot product is equal to the cosine of the angles between them,  which lies on the range from -1 to +1."}
        />

        {/* <QuizItem 
          questionString={"Q3: Which number is even."}
          choices={[
            { label: "3", isTrue: false },
            { label: "1", isTrue: false },
            { label: "7", isTrue: false },
            { label: "0", isTrue: true }
          ]}
          explanation={"Zero is even."}
        /> */}
        
      </Box>
    </Box>
  )
}

export default QuizDotProduct;