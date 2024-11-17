import React from 'react';
import FormulaTypeSelector from './FormulaTypeSelector';
import FormulaDisplayer from './FormulaDisplayer';
import InterpolationCurveWrapper from './areas/InterpolationCurveWrapper';
import MotionInterpolation from './areas/MotionInterpolation';
import ColorInterpolation from './areas/ColorInterpolation';
import NumberInterpolation from './areas/NumberInterpolation';
import FaceInterpolation from './areas/FaceInterpolation';

function MainPageLayout() {
  const components = [
    <FormulaTypeSelector />,
    <FormulaDisplayer />,
    <InterpolationCurveWrapper />,
    <NumberInterpolation />,
    <ColorInterpolation />,
    <MotionInterpolation />,
    <FaceInterpolation />,
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '70px',
      padding: '30px',
    }}>
      {components.map((component, index) => {
        // Check if it's the last item, if so then centering it.
        const isLastItem = index === components.length - 1;
        const isOdd = components.length % 2 !== 0;

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
  );
}

export default MainPageLayout;