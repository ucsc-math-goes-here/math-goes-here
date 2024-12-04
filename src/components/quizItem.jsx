import React, { useContext, useState } from 'react';

import { Button, Box, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material';

import "../css/quiz-section.css";

const QuizItem = ({questionString, imageUrl, choices, explanation}) => {

  let quizOptions = [];
  let quizImage;

  function optionName(index) { 
    return "q"+index; 
  }

  if(imageUrl){
    quizImage = <img src={imageUrl}/>;
  }

  let formTemplate = {};
  for (let x = 0; x < choices.length; x++){
    formTemplate[optionName(x)] = false
  }

  const [formData, setFormData] = useState(formTemplate);
  const [displayResult, setDisplayResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  let numCorrect = 0; 

  for (let choice of choices) {
    numCorrect += (choice.isTrue) ? 1 : 0; 
    //console.log(choice);
  }


  let isRadio = numCorrect == 1; //console.log("numCorrect: %d, isRadio: %s", numCorrect, isRadio.toString());

  let option = (isRadio) ?  <Radio /> : <Checkbox />; 

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked
    })
  }


  
  choices.forEach((choice, ind)=>{
    quizOptions.push(<FormControlLabel 
      name={optionName(ind)}
      control={option}
      label={choice.label}
      onChange={handleFormChange}
      value={ind}
      key={"key_"+ind} />)
  })

  let optionGroup = (isRadio) ? <RadioGroup>{quizOptions}</RadioGroup> : <FormGroup>{quizOptions}</FormGroup>

  function isAnswerCorrect() { 
    for (let index in choices) {

      let chosenAnswer = formData[optionName(index)]; 
      let correctAnswer = choices[index].isTrue; 

      if (chosenAnswer != correctAnswer)
        return false; 
    }
    return true; 
  }

  function checkAnswer (){
    setIsCorrect(isAnswerCorrect()); 
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
      
      {optionGroup}
      
      <br/>
      <Box>
        <Button variant="contained" onClick={checkAnswer}>Check Answer</Button>
      </Box>

      <Box className="result-section" style={getResultStyle()}>
        <Box className="result-box correct" style={{display: isCorrect ? "block" : "none"}}>
          <h3>Correct!</h3>
          <p>{explanation}</p>
        </Box>
        <Box className="result-box incorrect" style={{display: isCorrect ? "none" : "block"}}>
          <h3>Not Quite!</h3>
          <p>{explanation}</p>
          <p>Try again!</p>
        </Box>
      </Box>
      
      <br/>
    </Box>

    
  );
};

export default QuizItem;