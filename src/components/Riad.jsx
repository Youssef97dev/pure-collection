"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Riad = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start items-center gap-2 overflow-y-auto">
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure House Riad`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("riad.text_1")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("riad.text_2")}
        </p>
      </div>
      <Image
        src="/riad-1.jpg"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/riad-2.jpg"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure House Riad`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("riad.text_3")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("riad.text_4")}
        </p>
      </div>
      <Image
        src="/riad-1.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/riad-3.jpg"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/riad-4.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Riad;
