import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Boho = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start items-center gap-2 overflow-y-auto">
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure House By The Lake`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("boho.text_1")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("boho.text_2")}
        </p>
      </div>
      <Image
        src="/lake/lake-5.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/lake/lake-9.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure House By The Lake`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("boho.text_3")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("boho.text_4")}
        </p>
      </div>
      <Image
        src="/lake/lake-7.webp"
        alt="pure by the lake"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/lake/lake-2.webp"
        alt="pure by the lake"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/lake/lake-6.webp"
        alt="pure by the lake"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Boho;
