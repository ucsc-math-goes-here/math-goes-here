import React, { useRef, useState, useEffect } from "react";
import mario from "../../../assets/mario.png";

const VerticalJumper = ({ value }) => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    // Update container height when the component mounts
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const start = 0.9;
  const peak = 0.4;

  const flippedValue = 1 - value;

  const position =
    flippedValue <= 0.5
      ? start * containerHeight + (peak - start) * containerHeight * (flippedValue / 0.5)
      : peak * containerHeight - (peak - start) * containerHeight * ((flippedValue - 0.5) / 0.5);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={mario}
        alt="Mario"
        style={{
          position: "absolute",
          left: "50%",
          top: `${position}px`,
          transform: "translate(-50%, -50%)",
          width: "20%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default VerticalJumper;