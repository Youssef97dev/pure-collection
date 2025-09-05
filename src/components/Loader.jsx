import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Initial white background animation */}
      {/*<div className="absolute inset-0 flex z-50">
        <div className="bg-orange-400  flex-1 animate-slide-left"></div>
        <div className="bg-orange-400  flex-1 animate-slide-right"></div>
      </div>*/}

      {/* Beige background with logo animation */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-10">
        <Image
          src="/logo-1.png" // Replace with your logo path
          alt="Logo"
          width={500}
          height={500}
          className="w-36 animate-scale-3d"
        />
        {/* Content */}
        <div className="text-black text-[18px] tracking-[3px]">
          <TypeAnimation
            sequence={["Pure Collection Present", 1500]}
            wrapper="span"
            speed={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
