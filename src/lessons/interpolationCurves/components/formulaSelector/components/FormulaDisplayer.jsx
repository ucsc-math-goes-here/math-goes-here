import React, { useEffect, useRef, useContext, useState } from 'react';
import { FormulaContext } from '../../../contexts/FormulaContext';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { AppThemeContext } from '../../../../../contexts/AppThemeContext';


const FormulaDisplayer = () => {
  const [expression, setExpression] = useState('');
  const { selectedCurve, power } = useContext(FormulaContext);
  const appTheme = useContext(AppThemeContext);

  useEffect(() => {
    setExpression(selectedCurve.format.replaceAll('_N_', power).replaceAll('_N-1_', power - 1));
  }, [selectedCurve, power]);

  return (
    <MathJaxContext>
      <div className="formula-selector" id="expression" style={{ fontSize: '30px', width: "100%" }}>
        <MathJax inline dynamic>
          {`\\(${expression}\\)`}
        </MathJax>
      </div>
    </MathJaxContext>
  );
};

export default FormulaDisplayer;