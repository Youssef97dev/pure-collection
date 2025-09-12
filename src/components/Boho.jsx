"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";

const ImageBoho = [
  "/lake/lake-2.webp",
  "/lake/lake-3.webp",
  "/lake/lake-4.webp",
  "/lake/lake-6.webp",
  "/lake/lake-7.webp",
  "/lake/lake-12.webp",
  "/lake/lake-14.webp",
  "/lake/lake-15.webp",
  "/lake/lake-16.webp",
  "/lake/lake-17.webp",
  "/lake/lake-18.webp",
  "/lake/lake-19.webp",
  "/lake/lake-20.webp",
  "/lake/lake-21.webp",
  "/lake/lake-22.webp",
  "/lake/lake-23.webp",
  "/lake/lake-24.webp",
  "/lake/lake-25.webp",
  "/lake/lake-26.webp",
  "/lake/lake-28.webp",
  "/lake/lake-31.webp",
  "/lake/lake-32.webp",
  "/lake/lake-34.webp",
  "/lake/lake-35.webp",
  "/lake/lake-36.webp",
  "/lake/lake-37.webp",
  "/lake/lake-39.webp",
  "/lake/lake-40.webp",
  "/lake/lake-42.webp",
  "/lake/lake-43.webp",
];

const MemoizedImageBoho = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    layout="responsive"
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImageBoho.displayName = "MemoizedImageBoho";

const Boho = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <div className={`w-full flex flex-col justify-center items-center`}>
        <div className="w-full flex flex-col justify-center items-start gap-3 px-7 py-24 bg-riad text-riad_text">
          <h1 className="font-tropic uppercase text-[45px] leading-[57px]">{`Find The Magic`}</h1>
          <p className="uppercase text-[20px] text-justify">
            {t("boho.text_1")}
          </p>
          <div className="w-full flex flex-col justify-center items-center text-[15px]">
            <p className="text-justify">{t("boho.text_2")}</p>
            <p className="text-justify">{t("boho.text_3")}</p>
          </div>
        </div>
        <Image
          src="/lake/lake-26.webp"
          alt="pure house medina"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
        <div className="w-full flex flex-col justify-center items-start gap-3 text-[16px] leading-[25px] px-7 py-24 bg-riad_text text-riad">
          <p className="text-justify">{t("boho.text_5")}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center gap-4">
            <div className="w-full border-t border-riad"></div>
            <h1 className="font-tropic uppercase text-[45px] leading-[57px] text-riad py-10 ">
              {"Gallery"}
            </h1>
            <div className="w-full border-t border-riad"></div>
          </div>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail]}
            elementClassNames="masonry"
          >
            {ImageBoho?.map((image, index) => (
              <Link href={image} key={index}>
                <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
                  <MemoizedImageBoho
                    src={image}
                    alt={`Pure House By The Lake ${index}`}
                  />
                </div>
              </Link>
            ))}
          </LightGallery>
        </div>
      </div>

      {/*<div className="flex flex-col justify-start items-center gap-2 overflow-y-auto">
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
    </div>*/}
    </>
  );
};

export default Boho;
