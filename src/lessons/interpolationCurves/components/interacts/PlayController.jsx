import React, { useState } from 'react';
import { Slider, Box } from '@mui/material';

import ButtonRow from './ButtonRow';
import ProgressBarSlider from './ProgressBarSlider';

function PlayController({ width, maxWidth = "100%", buttonHeight = "30px", value = 0, setValue = () => { }, pause = () => { }, play = () => { }, replay = () => { } }) {
  return (
    <div style={{ width: width ?? "100%", maxWidth: maxWidth }}>
      <div style={{ height: buttonHeight }}>
        <ButtonRow pause={pause} play={play} replay={replay} />
      </div>
      <ProgressBarSlider value={value} setValue={setValue} />
    </div>
  );
}

export default PlayController;