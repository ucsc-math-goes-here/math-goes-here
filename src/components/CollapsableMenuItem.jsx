import React, { useState, useContext } from "react";

import {
  Box,
  Collapse,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import {
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';

const CollapsableMenuItem = ({ children, text, backgroundColor }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClickItem = (isOpen) => () => {
    setIsCollapsed(isOpen);
  }

  return (
    <Box>
      <ListItemButton
        sx={{
          fontWeight: "bold",
          backgroundColor: backgroundColor,
        }}
        onClick={onClickItem(isCollapsed ? false : true)}
      >
        <ListItemText primary={text} />
        {isCollapsed ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isCollapsed} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </Box>
  )
}

export default CollapsableMenuItem