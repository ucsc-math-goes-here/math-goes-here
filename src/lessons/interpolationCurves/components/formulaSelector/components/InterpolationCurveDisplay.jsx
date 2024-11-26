import React, { useEffect, useRef, useContext, useState } from 'react';
import { FormulaContext } from '../../../contexts/FormulaContext';
import { GlobalInterpolationTimeContext } from '../../../contexts/GlobalInterpolationTimeContext';

const InterpolationCurveDisplay = () => {
  const canvasRef = useRef(null);
  const { selectedCurve, power } = useContext(FormulaContext);
  const { globalTime } = useContext(GlobalInterpolationTimeContext);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const calculatedValue = selectedCurve.evaluator(globalTime, power);
    setValue(calculatedValue);
    drawCurve(selectedCurve, power);
  }, [selectedCurve, power, globalTime]);

  const canvasSize = 200.0;

  const drawCurve = (curve, powerValue) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvasSize, canvasSize);

    context.beginPath();
    context.moveTo(0, 0);

    const iterations = 50;
    for (let i = 0; i <= iterations; ++i) {
      const progress = i / iterations;
      let progressValue = curve.evaluator(progress, powerValue);
      context.lineTo(progress * canvasSize, canvasSize - (progressValue * canvasSize));
    }
    context.strokeStyle = 'black';
    context.stroke();

    const timePosition = globalTime * canvasSize;
    context.beginPath();
    context.moveTo(timePosition, 0);
    context.lineTo(timePosition, canvasSize);
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.stroke();
  };

  return (
    <div>
      <div className="formula-selector">
        <canvas ref={canvasRef} id="graph" width={canvasSize} height={canvasSize} style={{ border: '1px solid black' }}></canvas>
      </div>
    </div>
  );
};

export default InterpolationCurveDisplay;