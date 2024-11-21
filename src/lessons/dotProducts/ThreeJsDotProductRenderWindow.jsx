import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, AppBar, Toolbar, Container, Link, Divider } from '@mui/material';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createGameScene } from '../../threejs/dot_product/dotProductEntry';
import { Joystick } from 'react-joystick-component';


function ThreeJsDotProductRenderWindow() {
  const [displayWidth, setDisplayWidth] = useState(0);
  const [dotProduct, setDotProduct] = useState(1.0);
  const [showPlaneNormal, setShowPlaneNormal] = useState(true);
  const [showDirectionToLight, setShowDirectionToLight] = useState(true);
  const [showDotProduct, setShowDotProduct] = useState(true);
  const [lightSourceRotation, setLightSourceRotation] = useState(90);
  const [lightSourceOrbit, setLightSourceOrbit] = useState(0);
  
  const displayPortRef = useRef(null);
  const sceneControls = useRef({}); // For later: a defined class would be better


  useEffect(() => {
    // this can run twice, once for the initial render and once for the potential resize.
    // after a stable frame, the displayPortRef.current.clientWidth will be the correct value.
    // and this won't be triggered again.
    if (displayPortRef.current) { //  && displayPortRef.current.clientWidth != displayWidth
      setDisplayWidth(displayPortRef.current.clientWidth);
      const options = {
        onDotProductChange: onDotProductChange,
        controls: sceneControls.current,
      };
      const { scene, camera, renderer } = createGameScene(displayPortRef.current, options);

      return () => {
        renderer.dispose();
        if (displayPortRef.current) {
          displayPortRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, [displayWidth]);

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

  const onDotProductChange = (value) => {
    // round value
    value = Math.round(value * 100) / 100;
    setDotProduct(value);
  }

  const handleOrbitChange = (event) => {
    setLightSourceOrbit(event.target.value);
    console.log(sceneControls.current);
    sceneControls.current.updateLightSourceOrbit?.(event.target.value);
  }

  const handleRotationChange = (event) => {
    setLightSourceRotation(event.target.value);
    console.log(sceneControls.current);
    sceneControls.current.updateLightSourceRotation?.(event.target.value);
  }
  

  return (
    <div ref={displayPortRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 600,
        backgroundColor: '#e0e0e0',
        display: 'block',
        userSelect: 'none',
      }}>
      <div style={{ position: 'absolute', width: '100%', top: 10 }}>
        <FormControlLabel
          control={<Switch checked={showPlaneNormal} onChange={handleShowPlaneNormalChange} name="showPlaneNormal" />}
          label="Show Plane Normal"
        />
        <FormControlLabel
          control={<Switch checked={showDirectionToLight} onChange={handleShowDirectionToLightChange} name="showDirectionToLight" />}
          label="Show Direction To Light"
        />
        <FormControlLabel
          control={<Switch checked={showDotProduct} onChange={handleShowDotProductChange} name="showDotProduct" />}
          label="Show Dot Product"
        />
        <Button variant="contained" color="primary">
          Reset
        </Button>
      </div>
      <div style={{ position: 'absolute', top: 100, right: 50 }}>
        <Typography variant="h4" style={{ color: 'white' }}>
          <span style={{ color: 'blue' }}>Light</span> ⋅ <span style={{ color: 'red' }}>Normal</span> = <span style={{ color: 'yellow' }}>{dotProduct}</span>
        </Typography>
      </div>
      <div style={{ position: 'absolute', bottom: 10, left: 20, right: 200, textAlign: 'left', }}>
        <Typography variant="h7" style={{ color: 'white' }}>
          Orbit
        </Typography>
        <Slider
          value={lightSourceOrbit}
          onChange={handleOrbitChange}
          min={0} max={360}
          aria-label="Orbit"
          valueLabelDisplay="auto"
          style={{ marginTop: 0 }}
        />
        <Typography variant="h7" style={{ color: 'white' }}>
          Rotation
        </Typography>
        <Slider
          value={lightSourceRotation}
          onChange={handleRotationChange}
          min={0} max={180}
          aria-label="Rotation"
          valueLabelDisplay="auto"
          style={{ marginTop: 0 }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40 }}>
        <Joystick size={100} sticky={true} baseColor="#00000077" stickColor="#bbbbbbff" move={(event) => { console.log(event) }} stop={(event) => { console.log("input stopped") }}></Joystick>
      </div>
    </div>
  );
}

export default ThreeJsDotProductRenderWindow;
