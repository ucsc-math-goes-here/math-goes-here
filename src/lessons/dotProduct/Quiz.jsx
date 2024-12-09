import React from "react";
import { useMediaQuery } from "react-responsive";
import { Box } from '@mui/material';

import QuizItem from '../../components/quizItem';
import PageNav from "../../components/PageNav";

import acutevectors from '../../assets/dotprod3d/acutevectors.png';
import obtusevectors from '../../assets/dotprod3d/obtusevectors.png';
import orthovectors from '../../assets/dotprod3d/orthovectors.png';
import parallelvectors from '../../assets/dotprod3d/parallelvectors.png';
import vectorcomponents from '../../assets/dotprod3d/vectorcomponents.png';
import { StepNavigationButtons } from "../../components/StepNavigationButtons";


function QuizDotProduct() {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });


  return (
    <Box component="section" sx={{ mb: 4, alignContent: "start", justifyContent: "start" }}>

      <Box>
        <h1>
          <strong>Dot Product: </strong> Reflect
        </h1>
        <p>Test your understanding of Dot Product through these quiz questions!</p>
      </Box>

      <Box component="section" 
      sx={{ 
        my: 4,
        display: 'grid',
        gridTemplateColumns: isMobile ? '100%' : '1fr 1fr',
        gap: '1rem 3rem'
      }}>
        <QuizItem  
          questionString={<span>Vectors A and B are pointing in the same direction. Which of the following statements are true? Check all that apply.</span>}
          imageUrl={parallelvectors}
          choices={[
            { label: "A • B = |A||B|", isTrue: true },
            { label: "A • B = 0", isTrue: false },
            { label: "A • B > 0", isTrue: true },
            { label: "A • B < 0", isTrue: false }
          ]}
          explanation={"When two vectors have the same direction, the dot product is the product of their magnitudes, which is always positive."}
        />
        <QuizItem
          questionString={"P and Q are unit vectors.  Which of these are possible values for P • Q?  Check all that apply."}
          choices={[
            { label: "0.5", isTrue: true },
            { label: "-1", isTrue: true },
            { label: "1.5", isTrue: false },
            { label: "0", isTrue: true }
          ]}
          explanation={"Since |P| = |Q| = 1, the dot product is equal to the cosine of the angle between them,  which lies on the range from -1 to +1."}
        />
        <QuizItem
          questionString={"Based on this diagram, which is true?"}
          imageUrl={obtusevectors}
          choices={[

            { label: "A • B = 0", isTrue: false },
            { label: "A • B > 0", isTrue: false },
            { label: "A • B < 0", isTrue: true }

          ]}
          explanation={"When the angle between two vectors is obtuse, the dot product is negative."}
        />


        <QuizItem
          questionString={"Based on this diagram, which is true?"}
          imageUrl={acutevectors}

          choices={[

            { label: "A • B = 0", isTrue: false },
            { label: "A • B > 0", isTrue: true },
            { label: "A • B < 0", isTrue: false }

          ]}
          explanation={"When the angle between two vectors is acute, the dot product is positive."}
        />

        <QuizItem
          questionString={"Based on this diagram, which is true?"}
          imageUrl={orthovectors}
          choices={[

            { label: "A • B = 0", isTrue: true },
            { label: "A • B > 0", isTrue: false },
            { label: "A • B < 0", isTrue: false }

          ]}
          explanation={"When two vectors are perpendicular, their dot product is zero."}
        />

        <QuizItem
          questionString={<span>Based on this diagram,<br />which of these is the value of A • B?</span>}
          imageUrl={vectorcomponents}
          choices={[
            { label: "-5", isTrue: true },
            { label: "5", isTrue: false },
            { label: "(3,-8)", isTrue: false },
            { label: "-24", isTrue: false }
          ]}
          explanation={"You can calculate the dot product using: A • B = Ax⋅Bx + Ay⋅By"}
        />

      </Box>
      <StepNavigationButtons
        canGoPrev={true}
        canGoNext={true}
        prevUrl={"/explore-dot-product"}
        nextUrl={"/master-dot-product"}
        nextText="Master"
        prevText="Explore"
      />
    </Box>
  )
}

export default QuizDotProduct;