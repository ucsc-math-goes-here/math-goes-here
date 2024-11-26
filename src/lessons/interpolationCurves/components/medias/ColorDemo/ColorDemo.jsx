import React, { useState, useContext, useEffect } from 'react';
import ColorPicker from '../../areas/pieces/ColorPicker';
import { interpolateColor, getLighter, getDarker } from '../../../../../utils/colorUtils';
import DisplayBox from '../../DisplayBox';

import { AppThemeContext } from '../../../../../contexts/AppThemeContext';
import PlayController from '../../interacts/PlayController';
import { FormulaContext } from '../../../contexts/FormulaContext';

const ColorInterpolation = () => {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const appTheme = useContext(AppThemeContext);

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

  const interpolatedColor = interpolateColor(color1, color2, interpolateValue);

  return (
    <div style={{ width: "100%" }}>
      <DisplayBox>
        <div style={{ height: "300px", padding: "10px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Color Interpolation</h2>
          <div
            style={{
              width: 'calc(100% - 20px)',
              height: '140px',
              backgroundColor: interpolatedColor,
              borderRadius: `${appTheme.displayContentBorderRadius}px`,
              marginBottom: '15px',
              boxShadow: appTheme.midDropShadow,
            }}
          />

          <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <ColorPicker color={color1} onChange={setColor1} label="Color 1" />
            <ColorPicker color={color2} onChange={setColor2} label="Color 2" />
          </div>
        </div>
      </DisplayBox>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PlayController width="220px" value={timeOverride} setValue={updateTime} />
      </div>
    </div>
  );
};

export default ColorInterpolation;