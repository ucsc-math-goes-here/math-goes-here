import React, { useContext } from 'react';

import { Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { AppThemeContext } from '../contexts/AppThemeContext';

const QuizItem = ({questionString, imageUrl, choices}) => {
  const appTheme = useContext(AppThemeContext);

  let quizOptions = [];
  let quizImage;

  if(imageUrl){
    quizImage = <img src={imageUrl}/>;
  }

  choices.forEach((choice, ind)=>{
    quizOptions.push(<FormControlLabel control={<Checkbox />} label={choice.label}/>)
  })

  return (
    <Box sx={{'text-align': 'left'}}>
      <p style={{'text-align': 'left'}}>{questionString}</p>
      
      {quizImage}
      
      <FormGroup>
        {quizOptions}
      </FormGroup>

    </Box>
  );
};

export default QuizItem;