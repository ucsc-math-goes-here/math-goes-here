import React, { createContext, useState } from 'react';

const curves = {
  linear: { name: "Linear", evaluator: function (t, n) { return t; }, format: "t", defaultPower: 1 },
  power: { name: "Power", evaluator: function (t, n) { return t ** n; }, format: "t^{_N_}", defaultPower: 2 },
  minus_power: { name: "Reverse Power", evaluator: function (t, n) { return 1 - (1 - t) ** n; }, format: "1 - (1-t)^{_N_}", defaultPower: 2 },
  binom_ease: { name: "Binomial Ease", evaluator: function (t, n) { return n * t ** (n - 1) - (n - 1) * t ** n; }, format: "_N_t^{_N-1_} - _N-1_t^{_N_}", defaultPower: 3 },
  sine: { name: "Sine Wave", evaluator: function (t, n) { return (0.5 - 0.5 * Math.cos(Math.PI * t)); }, format: "\\frac{1 - \\cos(\\pi t)}{2}", defaultPower: 1 }
};

export const FormulaContext = createContext();

export const FormulaProvider = ({ children }) => {
  const [selectedCurve, setSelectedCurve] = useState(curves.linear);
  const [power, setPower] = useState(curves.linear.defaultPower);

  const value = {
    selectedCurve,
    setSelectedCurve,
    power,
    setPower,
    curves
  };

  return (
    <FormulaContext.Provider value={value}>
      {children}
    </FormulaContext.Provider>
  );
};