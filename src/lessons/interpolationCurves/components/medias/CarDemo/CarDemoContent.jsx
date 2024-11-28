import React, { useRef, useState, useEffect } from "react";
import car from "../../../assets/car.png";

const CarDemoContent = ({ value }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const position = (containerWidth * value) + 60;

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
        src={car}
        alt="Car"
        style={{
          position: "absolute",
          top: "80%",
          left: `${position}px`,
          transform: "translate(-50%, -50%)",
          width: "20%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default CarDemoContent;