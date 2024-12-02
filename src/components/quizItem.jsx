import React, { useContext, useState } from 'react';

import { Button, Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import "../css/quiz-section.css";

const QuizItem = ({questionString, imageUrl, choices, explaination}) => {

  let quizOptions = [];
  let quizImage;

  if(imageUrl){
    quizImage = <img src={imageUrl}/>;
  }

  let formTemplate = {};
  for (let x = 0; x < choices.length; x++){
    formTemplate["q"+x] = false
  }

  const [formData, setFormData] = useState(formTemplate);
  const [displayResult, setDisplayResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked
    })
  }
  
  choices.forEach((choice, ind)=>{
    quizOptions.push(<FormControlLabel 
      name={"q"+ind}
      control={<Checkbox />}
      label={choice.label}
      onChange={handleFormChange}
      checked={formData["q"+ind]}
      key={"key_"+ind} />)
  })

  function checkAnswer (){
    let result = 0
    choices.forEach((choice, ind) => {
      let isCorrect = choice.isTrue == formData["q"+ind];
      if (isCorrect){
        result++;
      }
      //console.log(`q${ind} is .... ${isCorrect ? 'correct' : 'wrong'}`)
    })
    //console.log('combined result is... ', result == choices.length ? "all good" : "not quite");
    setIsCorrect(result == choices.length);
    setDisplayResult(true);
  }

  function getResultStyle (){
    return {
      display: displayResult ? 'block' : 'none',
    }
  }

  return (
    <Box sx={{textAlign: 'left'}}>
      <p style={{textAlign: 'left'}}>{questionString}</p>
      
      {quizImage}
      
      <FormGroup>
        {quizOptions}
      </FormGroup>
      
      <br/>
      <Box>
        <Button variant="contained" onClick={checkAnswer}>Check Answer</Button>
      </Box>

      <Box className="result-section" style={getResultStyle()}>
        <Box className="result-box correct" style={{display: isCorrect ? "block" : "none"}}>
          <h3>That is Correct!</h3>
          <p>{explaination}</p>
        </Box>
        <Box className="result-box incorrect" style={{display: isCorrect ? "none" : "block"}}>
          <h3>Not Quite!</h3>
          <p>Try again!</p>
        </Box>
      </Box>
      
      <br/>
    </Box>

    
  );
};

export default QuizItem;