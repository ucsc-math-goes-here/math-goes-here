import React, { useState, useContext, useEffect } from 'react';
import DisplayBox from '../../DisplayBox';
import PlayController from '../../interacts/PlayController';
import { FormulaContext } from '../../../contexts/FormulaContext';
import CarDemoContent from './CarDemoContent';

const CarDemo = () => {
  const { globalTime, selectedCurve, power } = useContext(FormulaContext);
  const [timeOverride, setTimeOverride] = useState(globalTime);
  const [interpolateValue, setInterpolateValue] = useState(0);

  useEffect(() => {
    setTimeOverride(globalTime);
    return () => { };
  }, [globalTime]);

  useEffect(() => {
    setInterpolateValue(selectedCurve.evaluator(timeOverride, power));
  }, [timeOverride, selectedCurve, power]);

  const updateTime = (value) => {
    setTimeOverride(parseFloat(value));
  }


  return (
    <div style={{ width: "100%" }}>

      <DisplayBox >
        <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
          <div style={{ width: '100%', height: "100px" }}>
            <CarDemoContent value={interpolateValue} />
          </div>
        </div>
      </DisplayBox>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PlayController width="220px" value={timeOverride} setValue={updateTime} />
      </div>

    </div>
  );
};

export default CarDemo;