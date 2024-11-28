import React, { useState, useContext, useRef, useEffect } from 'react';
import SmileFace from './SmileFace';
import DisplayBox from '../../DisplayBox';
import PlayController from '../../interacts/PlayController';
import { FormulaContext } from '../../../contexts/FormulaContext';
import InterpolationAnimation from '../../utils/InterpolationAnimation';

const FaceInterpolation = () => {
  const { selectedCurve, power } = useContext(FormulaContext);
  const [timeOverride, setTimeOverride] = useState(0);
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
    setInterpolateValue(selectedCurve.evaluator(timeOverride, power));
  }, [timeOverride, selectedCurve, power]);

  const updateTime = (value) => {
    setTimeOverride(parseFloat(value));
  }

  return (
    <div>
      <DisplayBox>
        <div style={{ paddingLeft: 10, paddingRight: 10, height: "300px" }}>
          <div style={{ color: "white", fontSize: 22, fontWeight: "bold", marginTop: "10px", marginBottom: "5px" }}>
            Ready to Test Your Knowledge?
          </div>
          <SmileFace interpolateValue={interpolateValue} />
        </div>
      </DisplayBox >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PlayController width="220px"
          themeColor={"#bbbb33"}
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

export default FaceInterpolation;