import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';

import LessonLearnLayout from '../../lessons/LessonLearnLayout';
import { FormulaProvider } from './contexts/FormulaContext';
import MainPageLayout from './components/MainPageLayout';

function LessonLearnInterpolationCurve() {

  return (
    <LessonLearnLayout pageTitle="Interpolation Curves">
      <FormulaProvider>
        <div>
          <MainPageLayout />
        </div>
      </FormulaProvider>
    </LessonLearnLayout>
  );
}

export default LessonLearnInterpolationCurve;