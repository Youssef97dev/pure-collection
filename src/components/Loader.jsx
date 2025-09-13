"use client";
import Image from "next/image";
import { usePure } from "@/context/PureHouseContext";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Loader = ({ setHideLoader }) => {
  const { changeHotel } = usePure();
  const changePure = (name) => {
    changeHotel(name);
    setHideLoader(true);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center h-screen">
      {/* Beige background with logo animation */}
      <div className="absolute inset-0 bg-[#E6E1C9] flex flex-col items-center justify-start pt-24 gap-24">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-1">
            <Image
              src="/logo-4.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-60 "
            />
            {/*<span className="font-tropic text-[14px]">{"Discover"}</span>
          <MdOutlineKeyboardArrowDown size={12} />*/}
          </div>
          <p className=" px-8 font-familjenGrotesk text-[27px] leading-[28px] text-[#79431d]">{`WE LIVE TO INSPIRE AND BE INSPIRED, TO EXPAND BEYOND LABELS AND BOUNDARIES. WE FIND BEAUTY WHERE CULTURES MEET, NATURE REIGNS AND CREATIVITY RUNS FREE`}</p>
        </div>
        <div className="w-full flex justify-center items-end gap-16">
          <div className="" onClick={() => changePure("riad")}>
            <Image
              src="/riad/riad-logo-black-v3.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-14 animate-scale-3d"
            />
          </div>
          <div className="" onClick={() => changePure("farm")}>
            <Image
              src="/farm/farm-logo-black.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-14 animate-scale-3d"
            />
          </div>

          <div className="" onClick={() => changePure("boho")}>
            <Image
              src="/lake/lake-logo-black-v2.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-14 animate-scale-3d delay-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
