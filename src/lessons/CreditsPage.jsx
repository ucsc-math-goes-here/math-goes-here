import React, { useState, useContext } from 'react';

import {
  Box,
} from '@mui/material';

function CreditsPage() {

  return (
    <Box>
      <h1>Credits</h1>

      <h2 style={{marginTop: "3rem"}}>Producer</h2>
      <p>
        Marc LeBlanc
        <br/>
        <small>Riot Games</small>
      </p>
      
      <h2 style={{marginTop: "3rem"}}>Developers</h2>
      <p>
        Charles Park
        <br/>
        <small>UCSC GPM</small>
      </p>
      <p>
        Kai Jacobs
        <br/>
        <small>
          UCSC GPM
        </small>
      </p>
      <p>
        Weiyan (JT) Tao
        <br/>
        <small>
          UCSC GPM
        </small>
      </p>

      <h2 style={{marginTop: "3rem"}}>UI Design & Researchers</h2>
      
      <p>
        Daeun (Dany) Hwang
        <br/>
        <small>
          UCSC HCI
        </small>
      </p>
      <p>
        Noor Haider
        <br/>
        <small>
          UCSC HCI
        </small>
      </p>
      <p>
        Tanya Shrivastava
        <br/>
        <small>
          UCSC HCI
        </small>
      </p>
    </Box>
  );
}

export default CreditsPage;