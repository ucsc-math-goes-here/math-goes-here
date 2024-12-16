import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Box,
  List,
  ListItemButton
} from '@mui/material';

import CollapsableMenuItem from './CollapsableMenuItem';


const SideMenuContent = ({ }) => {
  const [topic, setTopic] = useState("");
  const [step, setStep] = useState("");
  const selectedTopicBackgroundColor = useRef("#00000020");
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    const path = location.pathname.split('/').pop();

    const newStep = path.split('-')[0];
    const newTopic = path.split('-').slice(1).join('-');
    setStep(newStep);
    setTopic(newTopic);

  }, [location]);

  const getColor = (isSelected) => {
    return isSelected ? selectedTopicBackgroundColor.current : "transparent";
  }

  return (
    <Box
      sx={{
        width: "250px",
      }}
    >
      <List component="div">
        <CollapsableMenuItem text={"Dot Products"} backgroundColor={getColor(topic == "dot-product")} >
          <List component="div">
            <ListItemButton
              sx={{ pl: 4, backgroundColor: getColor(step == "learn" && topic == "dot-product") }}
              to="./learn-dot-product"
            >
              Learn
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, backgroundColor: getColor(step == "explore" && topic == "dot-product") }}
              to="./explore-dot-product"
            >
              Explore
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              to="./reflect-dot-product"
            >
              Reflect
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, backgroundColor: getColor(step == "master" && topic == "dot-product") }}
              to="./master-dot-product"
            >
              Master
            </ListItemButton>
          </List>
        </CollapsableMenuItem>
        <CollapsableMenuItem text={<span>Interpolation<br />(Under Construction)</span>} backgroundColor={getColor(topic == "interpolation-curves")} >
          <List component="div">
            <ListItemButton
              sx={{ pl: 4 }}
              disabled
            >
              Learn
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, backgroundColor: getColor(step == "learn" && topic == "interpolation-curves") }}
              to="./learn-interpolation-curves"
            >
              Explore
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} disabled>
              Reflect
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} disabled>
              Master
            </ListItemButton>
          </List>
        </CollapsableMenuItem>
      </List>
    </Box>
  );
}

// const DotAndText = ({ isSelected, text }) => {
//   const dotStyle = {
//     width: '6px',
//     height: '6px',
//     borderRadius: '50%',
//     backgroundColor: isSelected ? 'gray' : 'transparent',
//     marginRight: '10px',
//   };

//   const containerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={dotStyle}></div>
//       <span>{text}</span>
//     </div>
//   );
// };

export default SideMenuContent;