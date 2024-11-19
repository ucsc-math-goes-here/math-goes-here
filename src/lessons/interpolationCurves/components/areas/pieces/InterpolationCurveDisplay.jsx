import React, { useEffect, useRef, useContext, useState } from 'react';
import { FormulaContext } from '../../../contexts/FormulaContext';

const InterpolationCurveDisplay = ({ time }) => {
  const canvasRef = useRef(null);
  const { selectedCurve, power } = useContext(FormulaContext);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const calculatedValue = selectedCurve.evaluator(time, power);
    setValue(calculatedValue);
    drawCurve(selectedCurve, power);
  }, [selectedCurve, power, time]);

  const canvasSize = 200.0;

  const drawCurve = (curve, powerValue) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, 256, 256);

    context.beginPath();
    context.moveTo(0, 0);

    for (let i = 1; i <= 256; ++i) {
      let progress = curve.evaluator(i / canvasSize, powerValue);
      context.lineTo(i, (1 - progress) * canvasSize);
    }
    context.strokeStyle = 'black';
    context.stroke();

    // Draw vertical line at `time`
    const timePosition = time * canvasSize;
    context.beginPath();
    context.moveTo(timePosition, 0);
    context.lineTo(timePosition, canvasSize);
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.stroke();
  };

  return (
    <div >
      <canvas ref={canvasRef} id="graph" width={canvasSize} height={canvasSize} style={{ border: '1px solid black' }}></canvas>
      <div style={{ marginLeft: '10px' }}>
        Time = {time.toFixed(2)}, Value = {value.toFixed(2)}
      </div>
    </div>
  );
};

export default InterpolationCurveDisplay;