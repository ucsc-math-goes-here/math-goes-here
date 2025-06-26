import React from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Typography } from '@mui/material';

import QuizItem from '../../components/quizItem';
import PageNav from "../../components/PageNav";

import acutevectors from '../../assets/dotprod3d/acutevectors.png';
import obtusevectors from '../../assets/dotprod3d/obtusevectors.png';
import orthovectors from '../../assets/dotprod3d/orthovectors.png';
import parallelvectors from '../../assets/dotprod3d/parallelvectors.png';
import vectorcomponents from '../../assets/dotprod3d/vectorcomponents.png';
import { StepNavigationBar, StepNavigationButtons } from "../../components/StepNavigationButtons";
import { useState } from "react";



export function SequentialQuiz({ items }) {
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((c) => Math.min(c + 1, items.length - 1));
  const goPrev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <Box width="900px" justifySelf="center">
      <Box mb={2}>
        {items.map((item, idx) => (
          <Box
            key={idx}
            sx={{ display: idx === current ? "block" : "none" }}
          >
            <QuizItem {...item} />
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%" justifySelf="center" >
        <button onClick={goPrev} disabled={current === 0}>Previous Question</button>
        <span>
          {current + 1} / {items.length}
        </span>
        <button onClick={goNext} disabled={current === items.length - 1}>Next Question</button>
      </Box>
    </Box>
  );
}


const quizItems = [
  {
    questionString: "P and Q are unit vectors.  Which of these are possible values for P • Q?  Check all that apply.",
    choices: [
      { label: "0.5", isTrue: true },
      { label: "-1", isTrue: true },
      { label: "1.5", isTrue: false },
      { label: "0", isTrue: true }
    ],
    explanation: "Since |P| = |Q| = 1, the dot product is equal to the cosine of the angle between them,  which lies on the range from -1 to +1."
  },
  {
    questionString: "Based on this diagram, which is true?",
    imageUrl: obtusevectors,
    choices: [
      { label: "A • B = 0", isTrue: false },
      { label: "A • B > 0", isTrue: false },
      { label: "A • B < 0", isTrue: true }
    ],
    explanation: "When the angle between two vectors is obtuse, the dot product is negative."
  },
  {
    questionString: "Based on this diagram, which is true?",
    imageUrl: acutevectors,
    choices: [
      { label: "A • B = 0", isTrue: false },
      { label: "A • B > 0", isTrue: true },
      { label: "A • B < 0", isTrue: false }
    ],
    explanation: "When the angle between two vectors is acute, the dot product is positive."
  },
  {
    questionString: "Based on this diagram, which is true?",
    imageUrl: orthovectors,
    choices: [
      { label: "A • B = 0", isTrue: true },
      { label: "A • B > 0", isTrue: false },
      { label: "A • B < 0", isTrue: false }
    ],
    explanation: "When two vectors are perpendicular, their dot product is zero."
  },
  {
    questionString: <span>Vectors A and B are pointing in the same direction. Which of the following statements are true? Check all that apply.</span>,
    imageUrl: parallelvectors,
    choices: [
      { label: "A • B = |A||B|", isTrue: true },
      { label: "A • B = 0", isTrue: false },
      { label: "A • B > 0", isTrue: true },
      { label: "A • B < 0", isTrue: false }
    ],
    explanation: "When two vectors have the same direction, the dot product is the product of their magnitudes, which is always positive."
  },
  {
    questionString: <span>Based on this diagram,<br />which of these is the value of A • B?</span>,
    imageUrl: vectorcomponents,
    choices: [
      { label: "-5", isTrue: true },
      { label: "5", isTrue: false },
      { label: "(3,-8)", isTrue: false },
      { label: "-24", isTrue: false }
    ],
    explanation: "You can calculate the dot product using: A • B = Ax⋅Bx + Ay⋅By"
  }
];
const QuizDotProduct = () => {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });  

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

      <Box>
        <Typography variant="h3" component="h1" sx={{ mb: 0 }}>
          <strong>Dot Product: </strong> Reflect
        </Typography>
        <Typography sx={{ mb: 4 }}>
          How well do you know dot products? Try these questions:
        </Typography>
      </Box>

      <SequentialQuiz items={quizItems} />

      <Typography sx={{ mt: 8, mb: 2  }}>
        If you'd like to try out the dot product in a small project, click <a href="./master-dot-product"><strong>Master</strong></a>.
      </Typography>

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