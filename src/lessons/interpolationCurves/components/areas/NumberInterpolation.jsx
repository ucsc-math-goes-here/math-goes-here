import React, { useState, useContext } from 'react';
import { interpolateColor, getLighter, getDarker } from '../../../../utils/colorUtils';
import DisplayBox from '../DisplayBox';
import { VerticalFillbar } from './pieces/VerticalFillbar';
import { AppThemeContext } from '../../../../contexts/AppThemeContext';


const NumberInterpolation = () => {
  const [factor, setFactor] = useState(0);
  const [interpolateValue, setInterpolateValue] = useState(0);
  const appTheme = useContext(AppThemeContext);

  const updateInterpolationFactor = (value) => {
    setFactor(parseFloat(value));
  }

  const updateInterpolationValue = (value) => {
    setInterpolateValue(value);
  }

  const backgroundColor = getDarker(appTheme.cardColor, 0.3);

  const mediaSectionHeight = 220;
  const mediaSectionTextHeight = 15;
  return (
    <DisplayBox factor={factor} updateInterpolationFactor={updateInterpolationFactor} updateInterpolationValue={updateInterpolationValue}>
      <h2>Value on the Curve</h2>
      <div
        style={{
          width: '100%',
          height: '180px',
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
          marginBottom: '35px',
        }}
      >
        <div style={{
          width: '50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <label style={{ marginBottom: 5 }}>{factor.toFixed(2)}</label>
          <VerticalFillbar backgroundColor={backgroundColor} fillColor='#00ff00' heightInNumber={mediaSectionHeight - mediaSectionTextHeight * 2} width={50} capValue={1} fillValue={factor} />
          <label style={{ marginTop: 5 }}>Interpolation Factor</label>
        </div>
        <div style={{
          width: '50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <label style={{ marginBottom: 5 }}>{interpolateValue.toFixed(2)}</label>
          <VerticalFillbar backgroundColor={backgroundColor} fillColor='#0000ff' heightInNumber={mediaSectionHeight - mediaSectionTextHeight * 2} width={50} capValue={1} fillValue={interpolateValue} />
          <label style={{ marginTop: 5 }}>Value On Curve</label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', }}>
        {/*        <label>Interpolation Factor: {factor.toFixed(2)}</label>
        <input
          type="number"
          value={inputValue}
          onChange={onInputChange}
          style={{ width: '120px', marginLeft: '15px', }}
          placeholder="Enter a value"
        />*/}
      </div>
    </DisplayBox>
  );
};

export default NumberInterpolation;