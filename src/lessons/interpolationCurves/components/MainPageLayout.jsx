import React from 'react';

import FormulaSelectorSection from './formulaSelector/FormulaSelectorSection';
import MotionInterpolation from './areas/MotionInterpolation';
import ColorInterpolation from './areas/ColorInterpolation';
import NumberInterpolation from './areas/NumberInterpolation';
import FaceInterpolation from './areas/FaceInterpolation';

function MainPageLayout() {
  const listComponents = [
    <NumberInterpolation />,
    <ColorInterpolation />,
    <MotionInterpolation />,
    <FaceInterpolation />,
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '500px 1fr',
      gap: '20px',
      padding: '20px',
    }}>
      <div style={{
        borderRight: '1px solid #ccc',
        paddingRight: '20px',
      }}>
        <FormulaSelectorSection />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
      }}>
        {listComponents.map((component, index) => {
          // Check if it's the last item, if so then centering it.
          const isLastItem = index === listComponents.length - 1;
          const isOdd = listComponents.length % 2 !== 0;

          return (
            <div
              key={index}
              style={{
                gridColumn: isLastItem && isOdd ? '1 / -1' : undefined,
                justifySelf: isLastItem && isOdd ? 'center' : undefined,
              }}
            >
              {component}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPageLayout;