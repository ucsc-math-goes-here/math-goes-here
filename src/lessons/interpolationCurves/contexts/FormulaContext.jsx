import React, { createContext, useState, useRef, useEffect } from 'react';

const curves = {
  linear: { name: "Linear", evaluator: function (t, n) { return t; }, format: "t", defaultPower: 1 },
  power: { name: "Power", evaluator: function (t, n) { return t ** n; }, format: "t^{_N_}", defaultPower: 2 },
  minus_power: { name: "Reverse Power", evaluator: function (t, n) { return 1 - (1 - t) ** n; }, format: "1 - (1-t)^{_N_}", defaultPower: 2 },
  binom_ease: { name: "Binomial Ease", evaluator: function (t, n) { return n * t ** (n - 1) - (n - 1) * t ** n; }, format: "_N_t^{_N-1_} - _N-1_t^{_N_}", defaultPower: 3 },
  sine: { name: "Sine Wave", evaluator: function (t, n) { return (0.5 - 0.5 * Math.cos(Math.PI * t)); }, format: "\\frac{1 - \\cos(\\pi t)}{2}", defaultPower: 1 }
};

export const FormulaContext = createContext();

export const FormulaProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(0);
  const [selectedCurve, setSelectedCurve] = useState(curves.linear);
  const [power, setPower] = useState(curves.linear.defaultPower);
  const [globalTime, setGlobalTime] = useState(0);

  const animationFrameRef = useRef(null);
  const directionRef = useRef(1);

  const play = () => {
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const replay = () => {
    setGlobalTime(0);
    play();
  };

  useEffect(() => {
    if (!isPlaying) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    let lastTimestamp = null;

    const step = (timestamp) => {
      console.log("step");
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      setGlobalTime((prevTime) => {
        const stepSize = deltaTime * 1;
        let nextTime = prevTime + stepSize;

        if (nextTime >= 1) {
          nextTime = 0;
        }
        return nextTime;
      });
      if (isPlaying) {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isPlaying]);

  const value = {
    selectedCurve,
    setSelectedCurve,
    power,
    setPower,
    globalTime,
    setGlobalTime,
    curves,
    play,
    pause,
    replay,
  };

  return (
    <FormulaContext.Provider value={value}>
      {children}
    </FormulaContext.Provider>
  );
};