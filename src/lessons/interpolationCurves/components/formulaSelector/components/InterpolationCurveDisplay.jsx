import React, { useEffect, useRef, useContext, useState } from 'react';
import { FormulaContext } from '../../../contexts/FormulaContext';
import { GlobalInterpolationTimeContext } from '../../../contexts/GlobalInterpolationTimeContext';

const InterpolationCurveDisplay = () => {
  const canvasRef = useRef(null);
  const measurementRef = useRef(null);
  const { selectedCurve, power } = useContext(FormulaContext);
  const { globalTime } = useContext(GlobalInterpolationTimeContext);
  const [value, setValue] = useState(0);
  const [canvasSize, setCanvasSize] = useState(0);

  useEffect(() => {
    const { width } = measurementRef.current.getBoundingClientRect();
    setCanvasSize(width);

    const calculatedValue = selectedCurve.evaluator(globalTime, power);
    setValue(calculatedValue);
    drawCurve(selectedCurve, power, width);
  }, [selectedCurve, power, globalTime]);


  const drawCurve = (curve, powerValue, canvasSizeUpdated) => {
    console.log('drawCurve' + canvasSizeUpdated);
    const canvas = canvasRef.current;
    canvas.width = canvasSizeUpdated;
    canvas.height = canvasSizeUpdated;
    const context = canvas.getContext('2d');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvasSizeUpdated, canvasSizeUpdated);

    context.beginPath();
    context.moveTo(0, 0);

    const iterations = 50;
    for (let i = 0; i <= iterations; ++i) {
      const progress = i / iterations;
      let progressValue = curve.evaluator(progress, powerValue);
      context.lineTo(progress * canvasSizeUpdated, canvasSizeUpdated - (progressValue * canvasSizeUpdated));
    }
    context.strokeStyle = 'black';
    context.stroke();

    const timePosition = globalTime * canvasSizeUpdated;
    context.beginPath();
    context.moveTo(timePosition, 0);
    context.lineTo(timePosition, canvasSizeUpdated);
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.stroke();
  };

  return (
    <div>
      <div className="formula-selector" style={{ width: "100%" }}>
        <div ref={measurementRef} style={{ width: "100%" }}>
          <canvas ref={canvasRef} id="graph" style={{ border: '1px solid black' }}></canvas>
        </div>
      </div>
    </div>
  );
};

export default InterpolationCurveDisplay;