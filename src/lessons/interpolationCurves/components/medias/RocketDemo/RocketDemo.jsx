import React, { useState, useContext, useEffect, useRef } from 'react';
import DisplayBox from '../../DisplayBox';
import PlayController from '../../interacts/PlayController';
import RocketDemoContent from './RocketDemoContent';
import { FormulaContext } from '../../../contexts/FormulaContext';
import InterpolationAnimation from '../../utils/InterpolationAnimation';
import { GlobalInterpolationTimeContext } from '../../../contexts/GlobalInterpolationTimeContext';

const RocketDemo = () => {
  const { selectedCurve, power } = useContext(FormulaContext);
  const { globalTime } = useContext(GlobalInterpolationTimeContext);
  const [timeOverride, setTimeOverride] = useState(globalTime);
  const [interpolateValue, setInterpolateValue] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = new InterpolationAnimation(setTimeOverride);

    return () => {
      if (animationRef.current) {
        animationRef.current.dispose();
        animationRef.current = null;
      }
    };
  }, []);

  const playAnimation = () => {
    animationRef.current.play();
  }

  const pauseAnimation = () => {
    animationRef.current.pause();
  }

  const replayAnimation = () => {
    animationRef.current.replay();
  }

  useEffect(() => {
    animationRef.current.pause();
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
      <DisplayBox>
        <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
          <div style={{ width: '100%', height: "300px" }}>
            <RocketDemoContent value={interpolateValue} />
          </div>
        </div>
      </DisplayBox>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PlayController width="220px"
          value={timeOverride}
          setValue={updateTime}
          play={() => playAnimation()}
          pause={() => pauseAnimation()}
          replay={() => replayAnimation()}
        />
      </div>
    </div>
  );
};

export default RocketDemo;