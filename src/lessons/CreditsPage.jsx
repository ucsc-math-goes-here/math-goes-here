import React, { useState, useContext } from 'react';

import {
  Box,
} from '@mui/material';

function CreditsPage() {

  return (
    <Box sx={{maxWidth:'800px', justifySelf:'center'}}>
      <h1>Credits</h1>

      This page was created by students and staff in the Computational Media Department<br/> of the University of California, Santa Cruz, as part of an independent study.

      <h2 style={{marginTop: "3rem"}}>Grad Students</h2>
      <p>
      Noor Haider <br />
      Daeun (Dany) Hwang <br />
      Kai Jacobs <br />
      Charles Park<br />
      Tanya Shrivastava <br/>
      Weiyan (JT) Tao <br />

      </p>      
      <h2 style={{marginTop: "3rem"}}>Visiting Game Developer</h2>
      <p>
      Marc LeBlanc
      </p>

      <p>Special thanks to Riot Games for giving Marc the time to work on it.</p>
    </Box>
  );
}

export default CreditsPage;