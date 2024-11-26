import React, { useContext } from 'react';
import { FormulaContext } from '../../../contexts/FormulaContext';
import { AppThemeContext } from '../../../../../contexts/AppThemeContext';

const FormulaTypeSelector = () => {
  const { selectedCurve, setSelectedCurve, power, setPower, curves } = useContext(FormulaContext);
  const appTheme = useContext(AppThemeContext);


  const handleCurveChange = (event) => {
    const curveKey = event.target.value;
    const curveObject = curves[curveKey];
    setSelectedCurve(curveObject);
    setPower(curveObject.defaultPower);
  };

  const handlePowerChange = (event) => {
    setPower(parseFloat(event.target.value));
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Curve Type:</h4>
        <select value={selectedCurve.name} onChange={handleCurveChange} style={{ color: appTheme.textColor, backgroundColor: 'white' }}>
          {Object.keys(curves).map((key) => (
            <option key={key} value={key}>
              {curves[key].name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Exponent:</h4>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={power}
          onChange={handlePowerChange}
          style={{ width: '50%' }}
        />
      </div>
    </div>
  );
};

export default FormulaTypeSelector;