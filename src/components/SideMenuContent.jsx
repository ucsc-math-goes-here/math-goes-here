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
        <CollapsableMenuItem text="Linear Interpolation">
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
              Quiz
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              Mastery
            </ListItemButton>
          </List>
        </CollapsableMenuItem>
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
              Quiz
            </ListItemButton>
            <ListItemButton 
              sx={{ pl: 4 }}
              to="./master-dot-product"
            >
              Mastery
            </ListItemButton>
          </List>
        </CollapsableMenuItem>
      </List>
    </Box>
  );
}

export default SideMenuContent;