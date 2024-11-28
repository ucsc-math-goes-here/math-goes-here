import React, { useRef, useState, useEffect } from "react";
import rocket from "../../../assets/rocket.png";

const RocketDemoContent = ({ value }) => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
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

  const position = (containerHeight * value) - 28;

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
        src={rocket}
        alt="Rocket"
        style={{
          position: "absolute",
          left: "50%",
          bottom: `${position}px`,
          transform: "translate(-50%, -50%)",
          width: "20%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default RocketDemoContent;