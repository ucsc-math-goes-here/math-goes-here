import React from 'react';

import FormulaSelectorSection from './formulaSelector/FormulaSelectorSection';
import MotionInterpolation from './areas/MotionInterpolation';
import ColorInterpolationDemo from './medias/ColorDemo/ColorDemo';
import CurveValueDemo from './medias/CurveValueDemo/CurveValueDemo';
import FaceInterpolation from './areas/FaceInterpolation';

import CarDemo from './medias/CarDemo/CarDemo';
import RocketDemo from './medias/RocketDemo/RocketDemo';
import MainPlayController from './MainPlayController';
import CharacterJumpDemo from './medias/CharacterJumpDemo/CharacterJumpDemo';

function MainPageLayout() {
  const listComponents = [
    <RocketDemo />,
    <CharacterJumpDemo />,
    <CurveValueDemo />,
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
        <div style={{ marginBottom: '100px', width: "100%" }}>
          <MainPlayController />
        </div>
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