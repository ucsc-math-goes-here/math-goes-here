import React, { useEffect, useContext } from 'react';
import { FormulaContext } from '../contexts/FormulaContext';
import { AppThemeContext } from '../../../contexts/AppThemeContext';
import PlayController from './interacts/PlayController';



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
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: `${appTheme.displayContentBorderRadius}px`,
        backgroundColor: appTheme.cardColor,
        boxShadow: appTheme.bigDropShadow,
        marginBottom: '15px',
      }}
    >
      {children}
    </div>
  );
};
export default DisplayBox;