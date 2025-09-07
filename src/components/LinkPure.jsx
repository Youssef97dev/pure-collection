"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePure } from "@/context/pureContext";

const LinkPure = () => {
  const [showRiad, setShowRiad] = useState(false);
  const [showFarm, setShowFarm] = useState(false);
  const [showBoho, setShowBoho] = useState(false);

  const { changeHotel } = usePure();

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFarm(true), 2000); // Farm after 1s
    const timer2 = setTimeout(() => setShowRiad(true), 2500); // Riad after 2s
    const timer3 = setTimeout(() => setShowBoho(true), 3000); // Boho after 3s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="bg-white text-white h-screen grid grid-rows-3 gap-1">
      {/* Row 1 */}
      <div
        className={`relative flex items-center justify-center transition-opacity duration-1000 ${
          showFarm ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/purefarm-13.webp"
          alt="pic1"
          width={1000}
          height={1000}
          className="h-full object-cover object-center"
        />
        <span className="absolute text-[30px] font-bonsad z-50">
          {"Pure Farm House"}
        </span>
      </div>

      {/* Row 2 */}
      <div
        className={`relative flex items-center justify-center transition-opacity duration-1000 ${
          showRiad ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/riad-2.jpg"
          alt="pic2"
          width={1000}
          height={1000}
          className="h-full object-cover object-center"
        />
        <div className="absolute inset-0 z-40 opacity-10 w-full h-full bg-black"></div>
        <span className="absolute text-[30px] font-bonsad z-50">
          {"Pure House Medina"}
        </span>
      </div>

      {/* Row 3 */}
      <div
        className={`relative flex items-center justify-center transition-opacity duration-1000 ${
          showBoho ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/lake-5.webp"
          alt="pic3"
          width={1000}
          height={1000}
          className="h-full object-cover"
        />
        <div className="absolute inset-0 z-40 opacity-15 w-full h-full bg-black"></div>
        <span className="absolute text-[30px] font-bonsad z-50">
          {"Pure House By The Lake"}
        </span>
      </div>
    </div>
  );
};

export default LinkPure;
