import React, { useEffect, useRef, useContext, useState } from 'react';
import { FormulaContext } from '../contexts/FormulaContext';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { AppThemeContext } from '../../../contexts/AppThemeContext';


const FormulaDisplayer = () => {
  const [expression, setExpression] = useState('');
  const { selectedCurve, setSelectedCurve, power, setPower, curves } = useContext(FormulaContext);
  const appTheme = useContext(AppThemeContext);

  useEffect(() => {
    setExpression(selectedCurve.format.replaceAll('_N_', power).replaceAll('_N-1_', power - 1));
  }, [selectedCurve, power]);


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100px',
      width: '500px',
      padding: `${appTheme.displayAreaPadding}px`,
      paddingLeft: `${appTheme.displayAreaPadding * 2}px`,
      paddingRight: `${appTheme.displayAreaPadding * 2}px`,
      borderRadius: `${appTheme.displayContentBorderRadius}px`,
      backgroundColor: appTheme.cardColor,
      boxShadow: appTheme.bigDropShadow,
    }}>
      <MathJaxContext>
        <div id="expression" style={{ fontSize: '30px' }}>
          <MathJax inline dynamic>
            {`\\(${expression}\\)`}
          </MathJax>
        </div>
      </MathJaxContext>
    </div>
  );
};

export default FormulaDisplayer;