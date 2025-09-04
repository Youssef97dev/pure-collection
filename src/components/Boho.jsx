import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Boho = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start items-center gap-2 overflow-y-auto">
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure By The Lake`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("boho.text_1")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("boho.text_2")}
        </p>
      </div>
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/v1756372499/dar_ouzguita/boho-4_izlqiv.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/v1756371424/dar_ouzguita/boho-3_x06ycq.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure By The Lake`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("boho.text_3")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("boho.text_4")}
        </p>
      </div>
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761705/dar_ouzguita/boho_house_20_dxux68.jpg"
        alt="pure by the lake"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761706/dar_ouzguita/boho_house_22_fmezlr.jpg"
        alt="pure by the lake"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761701/dar_ouzguita/boho_house_17_wi96y2.jpg"
        alt="pure by the lake"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Boho;
