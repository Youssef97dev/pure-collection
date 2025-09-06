"use client";
import { createContext, useContext, useState } from "react";

const PureContext = createContext();

export const PureProvider = ({ children }) => {
  const [property, setProperty] = useState("riad");

  const changeHotel = (name) => {
    setProperty(name);
  };

  return (
    <PureContext.Provider value={{ property, changeHotel }}>
      {children}
    </PureContext.Provider>
  );
};

// custom hook for convenience
export const usePure = () => useContext(PureContext);
