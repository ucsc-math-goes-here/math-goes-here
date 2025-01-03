import React, { useEffect, useContext } from 'react';

import PlayController from './interacts/PlayController';
import { GlobalInterpolationTimeContext } from '../contexts/GlobalInterpolationTimeContext';

const MainPlayController = ({ }) => {
  const { globalTime, setGlobalTime, play, pause, replay, } = useContext(GlobalInterpolationTimeContext);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PlayController width="400px" buttonHeight="50px" value={globalTime} setValue={setGlobalTime} pause={pause} play={play} replay={replay} themeColor='#404040'/>
    </div>
  );
}

export default MainPlayController;