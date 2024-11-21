import React, { useRef, useEffect } from 'react';
import { Box, Typography, AppBar, Toolbar, Container, Link, Divider } from '@mui/material';

import { createGameScene } from '../../threejs/dot_product/dotProductEntry';


function ThreeJsDotProductRenderWindow() {
  const [displayWidth, setDisplayWidth] = useState(0);
  const displayPortRef = useRef(null);


  useEffect(() => {
    // this can run twice, once for the initial render and once for the potential resize.
    // after a stable frame, the displayPortRef.current.clientWidth will be the correct value.
    // and this won't be triggered again.
    if (displayPortRef.current && displayPortRef.current.clientWidth != displayWidth) {
      setDisplayWidth(displayPortRef.current.clientWidth);
      const { scene, camera, renderer } = createGameScene(displayPortRef.current);

      return () => {
        renderer.dispose();
        if (displayPortRef.current) {
          displayPortRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, [displayWidth]);

  return (
    <div ref={displayPortRef}
      style={{
        width: '100%',
        height: 500,
        backgroundColor: '#e0e0e0',
        display: 'block',
      }}>
    </div>
  );
}

export default ThreeJsDotProductRenderWindow;
