import React, { useContext, useState } from 'react';
import { FormulaContext } from '../../../contexts/FormulaContext';
import { AppThemeContext } from '../../../../../contexts/AppThemeContext';

const FormulaTypeSelector = () => {
  const { selectedCurve, setSelectedCurve, power, setPower, curves } = useContext(FormulaContext);
  const appTheme = useContext(AppThemeContext);
  const [integerOnly, setIntegerOnly] = useState(false);

  const handleCurveChange = (event) => {
    const curveKey = event.target.value;
    const curveObject = curves[curveKey];
    setSelectedCurve(curveObject);
    setPower(curveObject.defaultPower);
  };

  const handlePowerChange = (event) => {
    setPower(parseFloat(event.target.value));
  };

  const handleToggleChange = () => {
    setIntegerOnly(!integerOnly);
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Curve Type:</span>
        <select value={selectedCurve.name} onChange={handleCurveChange} style={{ color: appTheme.textColor, backgroundColor: 'white' }}>
          {Object.keys(curves).map((key) => (
            <option key={key} value={key}>
              {curves[key].name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Exponent:</span>
        <input
          type="range"
          min="0"
          max="10"
          step={integerOnly ? "1" : "0.1"}
          value={power}
          onChange={handlePowerChange}
          style={{ width: '50%' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <span>Integer Only:</span>
        <input
          type="checkbox"
          checked={integerOnly}
          onChange={handleToggleChange}
          style={{ marginLeft: '5px' }}
        />
      </div>
    </div>
  );
};

export default FormulaTypeSelector;