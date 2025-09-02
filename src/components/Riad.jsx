import React from "react";
import Image from "next/image";

const Riad = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-2 overflow-y-auto">
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure House Riad`}</h1>
          <p className="text-[13px] leading-[15px] text-left">{`Pure Collection, a haven in the heart of Marrakech and its surroundings`}</p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">{`Where architecture, culture, and gastronomy immerse you in authenticity and the spirit of the Red City`}</p>
      </div>
      <Image
        src="/riad-1.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/riad-5.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Riad;
