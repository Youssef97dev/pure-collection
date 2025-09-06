"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { usePure } from "../context/pureContext";

const Loader = ({ setHideLoader }) => {
  const [showRiad, setShowRiad] = useState(false);
  const [showFarm, setShowFarm] = useState(false);
  const [showBoho, setShowBoho] = useState(false);
  const { changeHotel } = usePure();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFarm(true), 1000); // Farm after 1s
    const timer2 = setTimeout(() => setShowRiad(true), 1300); // Riad after 2s
    const timer3 = setTimeout(() => setShowBoho(true), 1600); // Boho after 3s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const changeProperty = (name) => {
    changeHotel(name);
    setHideLoader(true);
  };

  return (
    isClient && (
      <div className="fixed inset-0 z-40 flex items-center justify-center h-screen">
        {/* Initial white background animation */}
        {/*<div className="absolute inset-0 flex z-50">
        <div className="bg-orange-400  flex-1 animate-slide-left"></div>
        <div className="bg-orange-400  flex-1 animate-slide-right"></div>
      </div>*/}

        {/* Beige background with logo animation */}
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-8">
          <Image
            src="/logo-1.png" // Replace with your logo path
            alt="Logo"
            width={500}
            height={500}
            className="w-32 animate-scale-3d"
          />
          {/* Content 
        <div className="text-black text-[19px] tracking-[3px]">
          <TypeAnimation
            sequence={["Present To You", 1500]}
            wrapper="span"
            speed={30}
          />
        </div>*/}
          {/* collection */}
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div
              className={`w-full flex flex-col justify-center items-center transition-opacity duration-1000 ${
                showFarm ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => changeProperty("farm")}
            >
              <span className="text-[17px]">Pure Farm House</span>
              <Image
                src="/farm-3.png"
                alt="pure collection"
                width={500}
                height={500}
                className="w-[90%]"
              />
            </div>
            <div
              className={`w-full flex flex-col justify-center items-center transition-opacity duration-1000 ${
                showRiad ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => changeProperty("riad")}
            >
              <span className="text-[17px]">Pure House Medina</span>
              <Image
                src="/riad-3.png"
                alt="pure collection"
                width={500}
                height={500}
                className="w-[90%]"
              />
            </div>
            <div
              className={`w-full flex flex-col justify-center items-center transition-opacity duration-1000 ${
                showBoho ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => changeProperty("boho")}
            >
              <span className="text-[17px]">Pure House By The Lake</span>
              <Image
                src="/boho-3.png"
                alt="pure collection"
                width={500}
                height={500}
                className="w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Loader;
