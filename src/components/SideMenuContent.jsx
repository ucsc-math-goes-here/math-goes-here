import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  List,
  ListItemButton
} from '@mui/material';

import CollapsableMenuItem from './CollapsableMenuItem';


function SideMenuContent({  }) {

  return (
    
    <Box
      sx={{
        width: "250px",
      }}
    >
      <List component="div">
        <CollapsableMenuItem text="Dot Product">
          <List component="div">
            <ListItemButton 
              sx={{ pl: 4 }}
              to="./learn-dot-product"
            >
              Learn
            </ListItemButton>
            <ListItemButton 
              sx={{ pl: 4 }}
              to="./explore-dot-product"
            >
              Explore
            </ListItemButton>
            <ListItemButton 
              sx={{ pl: 4 }}
              to="./quiz-dot-product"
            >
              Reflect
            </ListItemButton>
            <ListItemButton 
              sx={{ pl: 4 }}
              to="./master-dot-product"
            >
              Master
            </ListItemButton>
          </List>
        </CollapsableMenuItem>
        <CollapsableMenuItem text={<span>Interpolation<br/>(Under Construction)</span>} >
          <List component="div">
            <ListItemButton 
              sx={{ pl: 4 }}
              to="./interpolationcurves_learn"
            >
              Learn
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              Explore
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              Reflect
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              Master
            </ListItemButton>
          </List>
        </CollapsableMenuItem>

      </List>
    </Box>
  );
}

export default SideMenuContent;