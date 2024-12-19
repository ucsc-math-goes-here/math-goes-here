import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, AppBar, Toolbar, Container, Link, Divider } from '@mui/material';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createGameScene } from './dot_product_explore_scene/dotProductEntry';
import { Joystick } from 'react-joystick-component';

import './styles/ThreeJsDotProductRenderWindow.css';


const ThreeJsDotProductRenderWindow = () => {
  const [dotProduct, setDotProduct] = useState(1.0);
  const [showPlaneNormal, setShowPlaneNormal] = useState(true);
  const [showDirectionToLight, setShowDirectionToLight] = useState(true);
  const [showDotProduct, setShowDotProduct] = useState(true);
  const [showDotProductLine, setShowDotProductLine] = useState(true);
  const [joystickKey, setJoystickKey] = useState(0);

  const groundNormalColor = "#0000ff";
  const lightSourcePointerColor = "#ffff00";
  const positiveDotLengthPointerColor = "#00ff00";
  const negativeDotLengthPointerColor = "#ff0000";

  const [lightSourceRotation, setLightSourceRotation] = useState(30);
  const [lightSourceOrbit, setLightSourceOrbit] = useState(0);


  const rendererRef = useRef(null);
  const displayPortRef = useRef(null);
  const sceneControls = useRef({}); // For later: a defined class would be better


  useEffect(() => {
    if (displayPortRef.current) {
      const options = {
        onDotProductChange: onDotProductChange,
        controls: sceneControls.current,
      };
      const { scene, camera, renderer } = createGameScene(displayPortRef.current, options);
      rendererRef.current = renderer;
      return () => {
        if (rendererRef.current) {
          rendererRef.current.dispose();
          if (displayPortRef.current) {
            displayPortRef.current.removeChild(rendererRef.current.domElement);
          }
        }
      };
    }
  }, []);


  const handleShowPlaneNormalChange = (event) => {
    setShowPlaneNormal(event.target.checked);
    sceneControls.current.updateShowPlaneNormal?.(event.target.checked);
  };

  const handleShowDirectionToLightChange = (event) => {
    setShowDirectionToLight(event.target.checked);
    sceneControls.current.updateShowLightPointer?.(event.target.checked);
  };

  const handleShowDotProductChange = (event) => {
    setShowDotProduct(event.target.checked);
    sceneControls.current.updateShowDotLengthPointer?.(event.target.checked);
  };

  const handleShowDotProductLineChange = (event) => {
    setShowDotProductLine(event.target.checked);
    sceneControls.current.updateShowDotProductline?.(event.target.checked);
  };

  const onDotProductChange = (value) => {
    // round value
    value = Math.round(value * 100) / 100;
    setDotProduct(value);
  }

  const handleOrbitChange = (event) => {
    setLightSourceOrbit(event.target.value);
    sceneControls.current.updateLightSourceOrbit?.(event.target.value);
  }

  const handleRotationChange = (event) => {
    setLightSourceRotation(event.target.value);
    sceneControls.current.updateLightSourceRotation?.(event.target.value);
  }

  const handleJoystickMove = (event) => {
    sceneControls.current.updateGroundRotation?.(-event.y * 0.5, -event.x * 0.5);
  }

  const reset = () => {
    setLightSourceOrbit(0);
    sceneControls.current.updateLightSourceOrbit?.(0);
    setLightSourceRotation(0);
    sceneControls.current.updateLightSourceRotation?.(0);
    setDotProduct(1.0);
    setShowDirectionToLight(true);
    sceneControls.current.updateShowLightPointer?.(true);
    setShowDotProduct(true);
    sceneControls.current.updateShowDotLengthPointer?.(true);
    setShowPlaneNormal(true);
    sceneControls.current.updateShowPlaneNormal?.(true);
    setShowDotProductLine(true);
    sceneControls.current.updateShowDotProductline?.(true);

    rendererRef.current.dispose();
    if (displayPortRef.current) {
      displayPortRef.current.removeChild(rendererRef.current.domElement);
    }
    const options = {
      onDotProductChange: onDotProductChange,
      controls: sceneControls.current,
    };
    const { scene, camera, renderer } = createGameScene(displayPortRef.current, options);
    rendererRef.current = renderer;

    setJoystickKey(prevKey => prevKey + 1);
  }


  return (
    <div ref={displayPortRef}
      style={{
        position: 'relative',
        width: 1000,
        height: 500,
        backgroundColor: '#e0e0e0',
        display: 'block',
        userSelect: 'none',
        margin: 'auto',
      }}>
      <div className="hover-container">
        <div className="hover-area">More Setting Options</div>
        <div className="dropdown-content">
          <FormControlLabel
            control={<Switch checked={showPlaneNormal} onChange={handleShowPlaneNormalChange} name="showPlaneNormal" />}
            label="Show Plane Normal"
            style={{ color: 'white' }}
          />
          <FormControlLabel
            control={<Switch checked={showDirectionToLight} onChange={handleShowDirectionToLightChange} name="showDirectionToLight" />}
            label="Show Direction To Light"
            style={{ color: 'white' }}
          />
          <FormControlLabel
            control={<Switch checked={showDotProduct} onChange={handleShowDotProductChange} name="showDotProduct" />}
            label="Show Dot Product"
            style={{ color: 'white' }}
          />
          <FormControlLabel
            control={<Switch checked={showDotProductLine} onChange={handleShowDotProductLineChange} name="showDotProductLine" />}
            label="Show Dot Product Line"
            style={{ color: 'white' }}
          />
          <Button variant="contained" color="primary" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 100, right: 50 }}>
        <Typography variant="h4" style={{ color: 'white' }}>
          <span style={{ color: lightSourcePointerColor }}>Light</span>
          ⋅
          <span style={{ color: groundNormalColor }}>Normal</span>
          =
          <span style={{ color: dotProduct >= 0 ? positiveDotLengthPointerColor : negativeDotLengthPointerColor }}>{dotProduct}</span>
        </Typography>
      </div>
      <div style={{ position: 'absolute', bottom: 10, left: 20, right: 200, textAlign: 'left', }}>
        <Typography variant="h7" style={{ color: 'white' }}>
          Sun Azimuth: {lightSourceOrbit}
        </Typography>
        <Slider
          value={lightSourceOrbit}
          onChange={handleOrbitChange}
          min={0} max={360}
          aria-label="Sun Azimuth"
          valueLabelDisplay="auto"
          style={{ marginTop: 0 }}
        />
        <Typography variant="h7" style={{ color: 'white' }}>
          Sun Elevation: {lightSourceRotation}
        </Typography>
        <Slider
          value={lightSourceRotation}
          onChange={handleRotationChange}
          min={-135} max={135}
          aria-label="Sun Elevation"
          valueLabelDisplay="auto"
          style={{ marginTop: 0 }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40 }}>
        <Joystick key={joystickKey} size={100} stickImage="./images/ground_joystick.png" sticky={true} baseColor="#00000077" stickColor="#bbbbbbff" move={handleJoystickMove} >
          {/* <Typography variant="h7" style={{ color: 'white' }}>
            Ground Angle
          </Typography> */}
        </Joystick>
      </div>
    </div>
  );
}

export default ThreeJsDotProductRenderWindow;
