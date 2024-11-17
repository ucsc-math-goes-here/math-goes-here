import React, { useEffect, useContext } from 'react';
import { FormulaContext } from '../contexts/FormulaContext';
import { AppThemeContext } from '../../../contexts/AppThemeContext';



const DisplayBox = ({ children, updateInterpolationFactor, updateInterpolationValue, factor }) => {
  const { selectedCurve, power } = useContext(FormulaContext);
  const appTheme = useContext(AppThemeContext);

  const onSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    updateInterpolationFactor(value);
    updateInterpolationValue(selectedCurve.evaluator(value, power));
  }

  useEffect(() => {
    // when changed the curve, then just use the current factor, which is time, to update the value
    updateInterpolationValue(selectedCurve.evaluator(factor, power));
  }, [selectedCurve, power]);
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        padding: `${appTheme.displayAreaPadding}px`,
        paddingLeft: `${appTheme.displayAreaPadding * 2}px`,
        paddingRight: `${appTheme.displayAreaPadding * 2}px`,
        borderRadius: `${appTheme.displayContentBorderRadius}px`,
        backgroundColor: appTheme.cardColor,
        boxShadow: appTheme.bigDropShadow,
      }}
    >
      <div style={{ width: '100%', height: '350px' }}>
        {children}
      </div>

      <div
        style={{
          width: '100%',
          height: '50px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={factor}
            onChange={onSliderChange}
          />
          <label>Interpolation Factor: {factor.toFixed(2)}</label>
        </div>
      </div>
    </div>
  );
};
export default DisplayBox;