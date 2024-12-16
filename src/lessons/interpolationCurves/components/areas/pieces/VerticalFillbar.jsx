import React, { useState } from 'react';

/// this is a very shaky implementation of a vertical fillbar.
/// just here to solve the need, not really a good solution.
export const VerticalFillbar = ({ backgroundColor, fillColor, heightInNumber, width: widthInNumber, capValue, fillValue }) => {

  const fillRatio = fillValue / capValue;
  const padding = 8;
  const innerFillAreaHeight = heightInNumber - padding * 2;
  const coverHeight = innerFillAreaHeight - (fillRatio * innerFillAreaHeight);

  return (
    <div style={{
      position: 'relative',
      width: `${widthInNumber}px`,
      height: `${heightInNumber}px`,
      backgroundColor: backgroundColor,
      padding: padding,
      borderRadius: 20
    }}>
      <div style={{ position: 'relative', width: "100%", height: innerFillAreaHeight, backgroundColor: fillColor, borderRadius: 15 }}></div>
      <div
        style={{
          position: 'absolute',
          top: padding,
          width: `${widthInNumber - (padding * 2)}px`,
          height: `${coverHeight}px`,
          backgroundColor: backgroundColor,
        }}
      ></div>
    </div>
  );
};