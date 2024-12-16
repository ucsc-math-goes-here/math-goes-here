import React, { useContext, useState } from 'react';

import { Button, Box, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material';


const displayButton = (text, path) => {
  if (text && path) {
    return <Button variant="contained" href={path} sx={{ textTransform: "none" }}>
      {text}
    </Button>
  } else {
    return <div></div>
  }
}

const PageNav = ({ prevText, prevPath, nextText, nextPath }) => {

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2rem",
        // position: "sticky",
        // padding: "2rem 0",
        // bottom: "0"
      }}
    >
      {displayButton(prevText, prevPath)}
      {displayButton(nextText, nextPath)}
    </Box>
  );
};

export default PageNav;