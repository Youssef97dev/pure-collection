"use client";
import { createContext, useContext, useState } from "react";

const PureHouseContext = createContext();

export const PureProvider = ({ children }) => {
  const [property, setProperty] = useState("riad");

  const changeHotel = (name) => {
    setProperty(name);
  };

  return (
    <PureHouseContext.Provider value={{ property, changeHotel }}>
      {children}
    </PureHouseContext.Provider>
  );
};

// custom hook for convenience
export const usePure = () => useContext(PureHouseContext);
