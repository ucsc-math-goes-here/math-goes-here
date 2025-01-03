import React from 'react';
import { Button, Box } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';

const ButtonRow = ({ pause = () => { }, play = () => { }, replay = () => { }, buttonColor = '#999999' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        gap: 2,
      }}
    >
      <Button
        variant="contained"
        onClick={pause}
        sx={{
          flex: 1,
          height: '100%',
          aspectRatio: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: buttonColor,
        }}
      >
        <PauseIcon />
      </Button>

      <Button
        variant="contained"
        onClick={play}
        sx={{
          flex: 1,
          height: '100%',
          aspectRatio: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: buttonColor,
        }}
      >
        <PlayArrowIcon />
      </Button>

      <Button
        variant="contained"
        onClick={replay}
        sx={{
          flex: 1,
          height: '100%',
          aspectRatio: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: buttonColor,
        }}
      >
        <ReplayIcon />
      </Button>
    </Box>
  );
}

export default ButtonRow;