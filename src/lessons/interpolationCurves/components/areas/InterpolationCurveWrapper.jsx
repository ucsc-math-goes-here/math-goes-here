import React, { useState } from 'react';
import DisplayBox from '../DisplayBox';
import InterpolationCurveDisplay from './pieces/InterpolationCurveDisplay';

const InterpolationCurveWrapper = () => {
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
      <h2>Interpolates Curves</h2>
      <InterpolationCurveDisplay time={factor} />
    </DisplayBox>
  );
};

export default InterpolationCurveWrapper;