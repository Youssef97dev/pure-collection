"use client";
import { useEffect, useState } from "react";
import Riad from "./Riad";
import Farm from "./Farm";
import Boho from "./Boho";

const ContentMobile = () => {
  const [pure, setPure] = useState("riad");

  const changeHotel = (name) => {
    setPure(name);
  };

  return (
    <div className="relative">
      {pure === "riad" ? (
        <div
          className={`transition-all duration-500 ease-in-out ${
            pure === "riad" ? "opacity-100" : "opacity-0"
          }`}
        >
          <Riad />
        </div>
      ) : pure === "farm" ? (
        <div
          className={`transition-all duration-500 ease-in-out ${
            pure === "farm" ? "opacity-100" : "opacity-0"
          }`}
        >
          <Farm />
        </div>
      ) : (
        <div
          className={`transition-all duration-500 ease-in-out ${
            pure === "boho" ? "opacity-100" : "opacity-0"
          }`}
        >
          <Boho />
        </div>
      )}

      {pure === "riad" ? (
        <button
          onClick={() => changeHotel("farm")}
          className="fixed top-56 right-0 writing-mode-vertical-rl bg-background px-2 h-40"
        >
          {"Pure Farm House"}
        </button>
      ) : pure === "farm" ? (
        <button
          onClick={() => changeHotel("boho")}
          className="fixed top-56 right-0 writing-mode-vertical-rl  bg-background px-2 h-40"
        >
          {"Pure By Lake"}
        </button>
      ) : (
        <></>
      )}

      {pure === "farm" ? (
        <button
          onClick={() => changeHotel("riad")}
          className="fixed top-56 left-0 writing-mode-vertical-rl bg-background px-2 h-40"
        >
          {"Pure House Riad"}
        </button>
      ) : pure === "boho" ? (
        <button
          onClick={() => changeHotel("farm")}
          className="fixed top-56 left-0 writing-mode-vertical-rl bg-background px-2 h-40"
        >
          {"Pure Farm House"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContentMobile;
