import React, { useState } from 'react';
import SmileFace from './pieces/SmileFace';
import DisplayBox from '../DisplayBox';

const FaceInterpolation = () => {
  const [factor, setFactor] = useState(0);
  const [interpolateValue, setInterpolateValue] = useState(0);


  const updateInterpolationFactor = (value) => {
    setFactor(parseFloat(value));
  }

  const updateInterpolationValue = (value) => {
    setInterpolateValue(value);
  }

  return (
    <DisplayBox factor={factor} updateInterpolationFactor={updateInterpolationFactor} updateInterpolationValue={updateInterpolationValue}>
      <h2>Ready to Test Your Knowledge?</h2>
      <SmileFace interpolateValue={interpolateValue} />
    </DisplayBox>
  );
};

export default FaceInterpolation;