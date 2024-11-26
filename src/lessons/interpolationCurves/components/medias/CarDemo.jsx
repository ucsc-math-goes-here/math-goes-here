import React, { useState } from 'react';
import DisplayBox from '../DisplayBox';
import PlayController from '../interacts/PlayController';

const CarDemo = () => {
  const [factor, setFactor] = useState(0);
  const [interpolateValue, setInterpolateValue] = useState(0);


  const updateInterpolationFactor = (value) => {
    setFactor(parseFloat(value));
  }

  const updateInterpolationValue = (value) => {
    setInterpolateValue(value);
  }

  return (
    <div style={{ width: "100%" }}>
      <DisplayBox factor={factor} updateInterpolationFactor={updateInterpolationFactor} updateInterpolationValue={updateInterpolationValue}>
        <div style={{ width: '100%', height: "100px" }}>

        </div>
      </DisplayBox>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PlayController width="220px" />
      </div>
    </div>
  );
};

export default CarDemo;