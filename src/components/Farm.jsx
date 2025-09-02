import Image from "next/image";
import React from "react";

const Farm = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-2 overflow-y-auto">
      <div className="w-full flex justify-between items-center gap-10">
        <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure Farm House`}</h1>
        <p className="text-[13px] leading-[15px] text-left">{`There is no reception to welcome guests to give them the feeling of entering their own home.`}</p>
      </div>
      <Image
        src="/farm-6.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/farm-3.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Farm;
