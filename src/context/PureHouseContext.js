"use client";
import { createContext, useContext, useState } from "react";

const PureHouseContext = createContext();

export const PureProvider = ({ children }) => {
  const [property, setProperty] = useState("riad");
  const [isMobile, setIsMobile] = useState(false);

  const changeHotel = (name) => {
    setProperty(name);
  };

  const changeMobile = (type) => {
    setIsMobile(type);
  };

  return (
    <PureHouseContext.Provider
      value={{ property, changeHotel, changeMobile, isMobile }}
    >
      {children}
    </PureHouseContext.Provider>
  );
};

// custom hook for convenience
export const usePure = () => useContext(PureHouseContext);
