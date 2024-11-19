import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppThemeContext } from '../contexts/AppThemeContext';


function SideDrawer({ toggleSideDrawer, sidedrawerOpen, allOptions, selectedIndex = 0, setSelectedIndex }) {
  const appTheme = useContext(AppThemeContext);
  const navigate = useNavigate();

  const drawerWidth = 280;
  const navigateToLessonPage = (page) => {
    navigate('/' + page + '_learn');
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar sx={{ height: appTheme.appBarHeight }} />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {allOptions.map((item, index) => (
            <Box key={item.name}
              sx={{
                width: '100%',
                paddingRight: 1,
                paddingLeft: 1,
                marginBottom: 1.5,
              }}
            >
              <ListItem disablePadding>
                <Button variant="contained"
                  disabled={!item.unlocked}
                  onClick={() => setSelectedIndex(index)}
                  fullWidth sx={{
                    // height: '50px',
                    backgroundColor: index != selectedIndex ? appTheme.disabledColor : appTheme.secondaryColor,
                    color: index != selectedIndex ? appTheme.primaryColor : "white",
                    boxShadow: index != selectedIndex ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : null,
                  }}>
                  <ListItemText primary={item.name} />
                </Button>
              </ListItem>
            </Box>
          ))}
        </List>
        <div style={{ height: "60px" }} />
        <Divider />
        <Box
          sx={{
            // position: 'absolute',
            // bottom: 0,
            width: '100%',
            padding: 1,
            marginTop: 1.5,
          }}
        >
          <Button variant="contained" fullWidth
            onClick={() => navigateToLessonPage(allOptions[selectedIndex].page)}
            sx={{ height: '55px', backgroundColor: appTheme.primaryColor, fontSize: 22, marginBottom: 0.5 }}
          >
            Start Lesson
          </Button>
          <Typography sx={{ fontSize: 14, color: '#909090' }}>
            {allOptions[selectedIndex].name}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

export default SideDrawer;