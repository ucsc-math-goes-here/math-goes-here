import React, { useState, useContext, useEffect } from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';
import { getLighter, getDarker } from '../../../../../utils/colorUtils';
import DisplayBox from '../../DisplayBox';
import { AppThemeContext } from '../../../../../contexts/AppThemeContext';
import PlayController from '../../interacts/PlayController';
import { FormulaContext } from '../../../contexts/FormulaContext';

const CurveValueDemo = () => {
  const appTheme = useContext(AppThemeContext);

  const { globalTime, selectedCurve, power } = useContext(FormulaContext);
  const [timeOverride, setTimeOverride] = useState(globalTime);
  const [interpolateValue, setInterpolateValue] = useState(0);

  useEffect(() => {
    setTimeOverride(globalTime);
    return () => { };
  }, [globalTime]);

  useEffect(() => {
    setInterpolateValue(selectedCurve.evaluator(timeOverride, power));
  }, [timeOverride, selectedCurve, power]);

  const updateTime = (value) => {
    setTimeOverride(parseFloat(value));
  }

  const backgroundColor = getDarker(appTheme.cardColor, 0.3);

  const ProgressBar = ({ value, label, color }) => (
    <Box sx={{ width: '100%', textAlign: 'center', mb: 3 }}>
      <Typography variant="caption" sx={{ mb: 1 }}>
        {label}: {value.toFixed(2)}
      </Typography>
      <Box sx={{
        backgroundColor,
        borderRadius: 10,
        overflow: 'hidden',
        height: 40,
        width: '80%',
        mx: 'auto',
      }}>
        <LinearProgress
          variant="determinate"
          value={value * 100}
          sx={{
            height: 40,
            backgroundColor: getLighter(backgroundColor, 0.2),
            '& .MuiLinearProgress-bar': {
              backgroundColor: color,
            },
          }}
        />
      </Box>
    </Box>
  );

  return (
    <div style={{ width: "100%" }}>
      <DisplayBox>
        <div style={{ height: "300px", padding: "10px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Value on the Curve</h2>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 1,
          }}>
            <ProgressBar value={timeOverride} label="Time" color="#00ff00" />
            <ProgressBar value={interpolateValue} label="Value On Curve" color="#0000ff" />
          </Box>
        </div>
      </DisplayBox>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PlayController width="220px" value={timeOverride} setValue={updateTime} />
      </div>
    </div>
  );
};

export default CurveValueDemo;