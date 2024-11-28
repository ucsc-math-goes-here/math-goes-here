import React, { useState } from 'react';
import { interpolateColor } from '../../../../../utils/colorUtils';

const SmileFace = ({ interpolateValue }) => {
  const points = {
    happy: { start: [55, 110], control: [100, 160], end: [145, 110] },
    sad: { start: [55, 130], control: [100, 80], end: [145, 130] },
  };

  const interpolatePoints = (start, end, t) => start + (end - start) * t;

  const startX = interpolatePoints(points.happy.start[0], points.sad.start[0], interpolateValue);
  const startY = interpolatePoints(points.happy.start[1], points.sad.start[1], interpolateValue);
  const controlX = interpolatePoints(points.happy.control[0], points.sad.control[0], interpolateValue);
  const controlY = interpolatePoints(points.happy.control[1], points.sad.control[1], interpolateValue);
  const endX = interpolatePoints(points.happy.end[0], points.sad.end[0], interpolateValue);
  const endY = interpolatePoints(points.happy.end[1], points.sad.end[1], interpolateValue);

  const happyColor = '#ffff00';
  const sadColor = '#ff3000';
  const lineColor = '#202020';

  const activeColor = interpolateColor(happyColor, sadColor, interpolateValue);
  let text = "YES!";
  if (interpolateValue > 0.7) {
    text = "NOT AT ALL!";
  } else if (interpolateValue > 0.3) {
    text = "MAYBE...";
  }

  return (
    <div style={{
      position: 'relative',
    }}>
      <svg width="200" height="200">
        <circle cx="100" cy="100" r="90" fill={activeColor} />
        <circle cx="75" cy="80" r="9" fill={lineColor} />
        <circle cx="125" cy="80" r="9" fill={lineColor} />

        <path
          d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
          stroke={lineColor}
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.5em',
        color: "white",
      }}>
        {text}
      </div>
    </div>

  );
};

export default SmileFace;