"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Farm = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start items-center gap-2 overflow-y-auto">
      <div className="w-full flex justify-between items-center gap-10">
        <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure Farm House`}</h1>
        <p className="text-[13px] leading-[15px] text-left">
          {t("farm.text_1")}
        </p>
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
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure Farm House`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("farm.text_2")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("farm.text_3")}
        </p>
      </div>
      <Image
        src="/farm-1.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/farm-5.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/farm-2.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Farm;
