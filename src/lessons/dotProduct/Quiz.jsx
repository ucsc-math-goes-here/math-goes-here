import React from "react";

import { Box, Typography} from '@mui/material';

import QuizItem from '../../components/quizItem';

import dot1 from '../../assets/dotprod3d/dot1.png';
import dot2 from '../../assets/dotprod3d/dot2.png';
import dot3 from '../../assets/dotprod3d/dot3.png';



function QuizDotProduct() {

  function shuffleArray(array) {
    for (let i = 1; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j],array[i]]; 
    }
    return array; 
  }
  
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
          questionString={"Vectors A and B are pointing in the same direction. Which of the following equations are true? Check all that apply."}
          imageUrl={dot1}
          choices={shuffleArray([
            { label: "A • B = |A||B|", isTrue: true },
            { label: "A • B = 0", isTrue: false },
            { label: "A • B > 0", isTrue: true },
            { label: "A • B < 0", isTrue: false }
          ])}
          explanation={"When two vectors have the same direction, the dot product is the product of their magnitudes, which is always positive."}
        />
        <QuizItem 
          questionString={"A and B are unit vectors.  Which of these are possible values for A • B?  Check all that apply."}
          choices={shuffleArray([
            { label: "0.5", isTrue: true },
            { label: "-1", isTrue: true },
            { label: "1.5", isTrue: false },
            { label: "0", isTrue: true }
          ])}
          explanation={"Since |A| = |B| = 1, the dot product is equal to the cosine of the angles between them,  which lies on the range from -1 to +1."}
        />

        <img src={dot3} />

        <QuizItem 
          questionString={"In Figure 1, which is true?"}
          choices={shuffleArray([

            { label: "A • B = 0", isTrue: false },
            { label: "A • B > 0", isTrue: false },
            { label: "A • B < 0", isTrue: true }
 
          ])}
          explanation={"When the angle between two vectors is obtuse, the dot product is negative."}
        />

        <QuizItem 
          questionString={"In Figure 2, which is true?"}
          choices={shuffleArray([

            { label: "A • B = 0", isTrue: false },
            { label: "A • B > 0", isTrue: true },
            { label: "A • B < 0", isTrue: false }
 
          ])}
          explanation={"When the angle between two vectors is acute, the dot product is positive."}
        />
  
      <QuizItem 
          questionString={"In Figure 3, which is true?"}
          choices={shuffleArray([

            { label: "A • B = 0", isTrue: true },
            { label: "A • B > 0", isTrue: false },
            { label: "A • B < 0", isTrue: false }
 
          ])}
          explanation={"When two vectors are perpendicular, their dot product is zero."}
        />
  
        <QuizItem 
          questionString={"Based on this diagram, which of these is the value of A ⋅ B?"}
          imageUrl={dot2}
          choices={shuffleArray([
            { label: "-5", isTrue: true },
            { label: "5", isTrue: false },
            { label: "(3,-8)", isTrue: false },
            { label: "-24", isTrue: false }
          ])}
          explanation={"A ⋅ B = Ax ⋅ Bx + Ay ⋅ By"}
        />


        
      </Box>
    </Box>
  )
}

export default QuizDotProduct;