"use client";
import Image from "next/image";
import { usePure } from "@/context/PureHouseContext";

const Loader = ({ setHideLoader }) => {
  const { changeHotel } = usePure();
  const changePure = (name) => {
    changeHotel(name);
    setHideLoader(true);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center h-screen">
      {/* Beige background with logo animation */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-start pt-40 gap-16">
        <Image
          src="/logo-1.png" // Replace with your logo path
          alt="Logo"
          width={500}
          height={500}
          className="w-40 animate-scale-3d"
        />
        <div className="w-full flex justify-center items-end gap-16">
          <div className="" onClick={() => changePure("riad")}>
            <Image
              src="/riad/riad-logo-black-2.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-[52px] animate-scale-3d"
            />
          </div>
          <div className="" onClick={() => changePure("farm")}>
            <Image
              src="/farm/farm-logo-black.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-11 animate-scale-3d"
            />
          </div>
          <div className="" onClick={() => changePure("boho")}>
            <Image
              src="/lake/lake-logo-black.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-11 animate-scale-3d delay-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
