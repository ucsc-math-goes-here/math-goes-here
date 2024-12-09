import React, { createContext, useState } from 'react';


export const NavigationContext = createContext();

// Current not in use. Might add this later for better organization
export const NavigationProvider = ({ children }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [step, setStep] = useState("learn");

  const allTopics = {
    dotProduct: "dot-product",
    interpolationCurves: "interpolation-curves",
  };
  const allSteps = {
    learn: "learn",
    explore: "explore",
    reflect: "reflect",
    master: "master"
  };

  const goTo = (topic, step) => {

    setSelectedTopic(topic);
    setStep(step);
  };

  const value = {
    allTopics,
    allSteps,
    selectedTopic,
    setSelectedTopic,
    step,
    setStep,
    goTo,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

