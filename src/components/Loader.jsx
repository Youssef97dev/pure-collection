"use client";
import Image from "next/image";
import { usePure } from "@/context/PureHouseContext";

const Loader = ({ setHideLoader }) => {
  const { changeHotel } = usePure();
  const changePure = (name) => {
    setHideLoader(true);
    changeHotel(name);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center h-screen">
      {/* Beige background with logo animation */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-32">
        <Image
          src="/logo-1.png" // Replace with your logo path
          alt="Logo"
          width={500}
          height={500}
          className="w-52 animate-scale-3d"
        />
        <div className="w-full flex flex-col justify-center items-center gap-14">
          <div onClick={() => changePure("boho")}>
            <Image
              src="/bohohouse-1.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-14 animate-scale-3d"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <div onClick={() => changePure("riad")}>
              <Image
                src="/riad.png" // Replace with your logo path
                alt="Logo"
                width={500}
                height={500}
                className="w-16 animate-scale-3d"
              />
            </div>
            <div onClick={() => changePure("farm")}>
              <Image
                src="/riad.png" // Replace with your logo path
                alt="Logo"
                width={500}
                height={500}
                className="w-16 animate-scale-3d"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
