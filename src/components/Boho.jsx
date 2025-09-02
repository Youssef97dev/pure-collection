import React from "react";
import Image from "next/image";

const Boho = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 overflow-y-scroll">
      <div className="w-full flex justify-between items-center gap-36">
        <h1 className="text-[21px] leading-[20px] whitespace-nowrap">{`Pure By Lake`}</h1>
        <p className="text-[15px] leading-[15px] text-center">{`test`}</p>
      </div>
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/v1756372493/dar_ouzguita/boho-2_pdhtun.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/v1756372495/dar_ouzguita/boho-5_ucsjyr.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Boho;
