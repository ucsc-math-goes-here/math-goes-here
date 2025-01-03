import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';

import LessonLearnLayout from '../../components/LessonLearnLayout';
import { FormulaProvider } from './contexts/FormulaContext';
import { GlobalInterpolationTimeProvider } from './contexts/GlobalInterpolationTimeContext';
import MainPageLayout from './components/MainPageLayout';

const LessonLearnInterpolationCurve = () => {

  return (
    <LessonLearnLayout pageTitle="Interpolation Curves">
      <GlobalInterpolationTimeProvider>
        <FormulaProvider>
          <div>
            <MainPageLayout />
          </div>
        </FormulaProvider>
      </GlobalInterpolationTimeProvider>
    </LessonLearnLayout>
  );
}

export default LessonLearnInterpolationCurve;