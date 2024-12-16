import React, { useState } from 'react';

import ButtonRow from './ButtonRow';
import ProgressBarSlider from './ProgressBarSlider';

const PlayController = ({ width, maxWidth = "100%", buttonHeight = "30px", value = 0, setValue = () => { }, pause = () => { }, play = () => { }, replay = () => { }, themeColor = '#999999' }) => {
  return (
    <div style={{ width: width ?? "100%", maxWidth: maxWidth }}>
      <div style={{ height: buttonHeight }}>
        <ButtonRow pause={pause} play={play} replay={replay} buttonColor={themeColor} />
      </div>
      <ProgressBarSlider value={value} setValue={setValue} />
    </div>
  );
}

export default PlayController;