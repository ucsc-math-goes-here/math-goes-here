import React, { useContext, useState } from 'react';

import { Button, Box, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material';


import "../css/quiz-section.css";

function shuffleArray(array) {
  for (let i = 1; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j],array[i]]; 
  }
  return array; 
}


const QuizItem = ({questionString, imageUrl, choices, explanation}) => {

  let quizOptions = [];
  let quizImage;
  let spacer; 

  function optionName(index) { 
    return "q"+index; 
  }

  if(imageUrl){
    quizImage = <img src={imageUrl} style={{maxWidth: '100%', objectFit: 'cover', margin: 'auto'}}/>;
    spacer = <td width="25%" ></td>;
  }

  let formTemplate = {};
  for (let x = 0; x < choices.length; x++){
    formTemplate[optionName(x)] = false
  }

  const [formData, setFormData] = useState(formTemplate);
  const [displayResult, setDisplayResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answers, setAnswers] = useState([]); // to be replaced by array 

  if (answers.length != choices.length) {
    setAnswers(shuffleArray(choices));
  }

  let numCorrect = 0; 

  for (let choice of answers) {
    numCorrect += (choice.isTrue) ? 1 : 0; 
  }


  let isRadio = numCorrect == 1; //console.log("numCorrect: %d, isRadio: %s", numCorrect, isRadio.toString());

  let option = (isRadio) ?  <Radio /> : <Checkbox />; 

  const handleFormChange = (event) => {
    setFormData({
      ...(isRadio ? formTemplate : formData),   // for radio buttons, revert other states to false e
      [event.target.name]: event.target.checked
    })
  }


  
  answers.forEach((choice, ind)=>{
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
    for (let index in answers) {

      let chosenAnswer = formData[optionName(index)]; 
      let correctAnswer = answers[index].isTrue; 

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
    <Box sx={{textAlign: 'left', mx: 1}}>
      <h2 style={{textAlign: 'left', lineHeight: 1.1}}>{questionString}</h2>

      <Box sx={{
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          gap: '1rem'
        }}
      >
        {quizImage}
        <Box>
          {optionGroup}
          <Button variant="contained" onClick={checkAnswer} style={{marginTop: '1rem'}}>Check Answer</Button>
        </Box>
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