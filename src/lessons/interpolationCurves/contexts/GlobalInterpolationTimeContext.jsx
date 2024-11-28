import React, { createContext, useState, useRef, useEffect } from 'react';

export const GlobalInterpolationTimeContext = createContext();

export const GlobalInterpolationTimeProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(0);
  const [globalTime, setGlobalTime] = useState(0);

  const animationFrameRef = useRef(null);
  const directionRef = useRef(1);

  const play = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
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
    globalTime,
    setGlobalTime,
    play,
    pause,
    replay,
  };

  return (
    <GlobalInterpolationTimeContext.Provider value={value}>
      {children}
    </GlobalInterpolationTimeContext.Provider>
  );
};