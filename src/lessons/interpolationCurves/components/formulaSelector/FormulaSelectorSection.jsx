import React, { useContext } from 'react';

import { FormulaContext } from '../../contexts/FormulaContext';
import { AppThemeContext } from '../../../../contexts/AppThemeContext';

import FormulaTypeSelector from './components/FormulaTypeSelector';
import FormulaDisplayer from './components/FormulaDisplayer';
import InterpolationCurveDisplay from './components/InterpolationCurveDisplay';

import ButtonRow from '../interacts/ButtonRow';
import PlayController from '../interacts/PlayController';

import './style.css';


const FormulaSelectorSection = () => {
  const { selectedCurve, setSelectedCurve, power, setPower, curves } = useContext(FormulaContext);
  const appTheme = useContext(AppThemeContext);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
    }}>
      <h2>
        Simulation Details
      </h2>
      <FormulaDisplayer />
      <InterpolationCurveDisplay />
      <div style={{ height: '30px' }} />
      <FormulaTypeSelector />
    </div>
  );
};

export default FormulaSelectorSection;