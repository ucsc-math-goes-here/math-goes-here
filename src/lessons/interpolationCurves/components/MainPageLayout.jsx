import React from 'react';

import FormulaSelectorSection from './formulaSelector/FormulaSelectorSection';
import MotionInterpolation from './areas/MotionInterpolation';
import ColorInterpolationDemo from './medias/ColorInterpolationDemo';
import NumberInterpolationDemo from './medias/NumberInterpolationDemo';
import FaceInterpolation from './areas/FaceInterpolation';

import CarDemo from './medias/CarDemo';
import RocketDemo from './medias/RocketDemo';
import CharacterDemo from './medias/CharacterDemo';

function MainPageLayout() {
  const listComponents = [
    <RocketDemo />,
    <CharacterDemo />,
    <NumberInterpolationDemo />,
    <ColorInterpolationDemo />,
    <FaceInterpolation />,
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '350px 1fr',
      gap: '20px',
      padding: '20px',
    }}>
      {/* <div style={{
        borderRight: '1px solid #ccc',
        paddingRight: '20px',
      }}>
        <FormulaSelectorSection />
      </div> */}
      <FormulaSelectorSection />

      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: '20px', width: "100%" }}>
          <CarDemo />
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
    </div>
  );
}

export default MainPageLayout;