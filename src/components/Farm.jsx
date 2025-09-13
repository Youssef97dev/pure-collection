"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";

const ImageFarm = [
  "/farm/purefarm-37.webp",
  "/farm/purefarm-39.webp",
  "/farm/purefarm-31.webp",
  "/farm/purefarm-25.webp",
  "/farm/purefarm-33.webp",
  "/farm/purefarm-44.webp",
  "/farm/purefarm-12.webp",
  "/farm/purefarm-19.webp",
  "/farm/purefarm-9.webp",
  "/farm/purefarm-3.webp",
  "/farm/purefarm-16.webp",
  "/farm/purefarm-49.webp",
  "/farm/purefarm-15.webp",
  "/farm/purefarm-13.webp",
  "/farm/purefarm-26.webp",
  "/farm/purefarm-10.webp",
  "/farm/purefarm-41.webp",
  "/farm/purefarm-48.webp",
  "/farm/purefarm-5.webp",
  "/farm/purefarm-1.webp",
  "/farm/purefarm-20.webp",
  "/farm/purefarm-2.webp",
  "/farm/purefarm-6.webp",
  "/farm/purefarm-42.webp",
  "/farm/purefarm-30.webp",
  "/farm/purefarm-43.webp",
  "/farm/purefarm-14.webp",
  "/farm/purefarm-8.webp",
  "/farm/purefarm-51.webp",
  "/farm/purefarm-53.webp",
  "/farm/purefarm-7.webp",
  "/farm/farm-100.jpg",
  "/farm/purefarm-4.webp",
  "/farm/purefarm-50.webp",
  "/farm/purefarm-29.webp",
  "/farm/purefarm-46.webp",
  "/farm/purefarm-27.webp",
  "/farm/purefarm-35.webp",
  "/farm/purefarm-47.webp",
  "/farm/purefarm-34.webp",
  "/farm/purefarm-36.webp",
  "/farm/purefarm-45.webp",
  "/farm/purefarm-38.webp",
];

const MemoizedImageFarm = React.memo(({ src, alt }) => (
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
MemoizedImageFarm.displayName = "MemoizedImageFarm";

const Farm = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start gap-3 px-7 py-24 bg-farm text-farm_text">
          <h1 className="font-tropic uppercase text-[45px] leading-[57px]">{`Where The Stands Still`}</h1>
          <p className="uppercase text-[20px] text-justify">
            {t("farm.text_1")}
          </p>
          <div className="w-full flex flex-col justify-center items-center text-[15px]">
            <p className="text-justify">{t("farm.text_2")}</p>
            <p className="text-justify">{t("farm.text_3")}</p>
          </div>
        </div>
        <Image
          src="/farm/purefarm-2.webp"
          alt="pure farm house"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
        <div className="w-full flex flex-col justify-center items-start gap-3 text-[16px] leading-[25px] px-7 py-24 bg-farm_text text-farm">
          <p className="text-justify">{t("farm.text_4")}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center gap-4">
            <div className="w-full border-t border-farm"></div>
            <h1 className="font-tropic uppercase text-[45px] leading-[57px] text-farm py-10 ">
              {"Gallery"}
            </h1>
            <div className="w-full border-t border-farm"></div>
          </div>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail]}
            elementClassNames="masonry"
          >
            {ImageFarm?.map((image, index) => (
              <Link href={image} key={index}>
                <div className="masonry-item relative  hover:scale-105 transition-all ease-linear overflow-hidden">
                  <MemoizedImageFarm
                    src={image}
                    alt={`Pure Farm House ${index}`}
                  />
                </div>
              </Link>
            ))}
          </LightGallery>
        </div>
      </div>
      {/*<div className="flex flex-col justify-start items-center gap-2 overflow-y-auto">
      <div className="w-full flex justify-between items-center gap-10">
        <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure Farm House`}</h1>
        <p className="text-[13px] leading-[15px] text-left">
          {t("farm.text_1")}
        </p>
      </div>
      <Image
        src="/farm/purefarm-1.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/farm/purefarm-2.webp"
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
        src="/farm/purefarm-4.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/farm/purefarm-6.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/farm/purefarm-7.webp"
        alt="pure farm house"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>*/}
    </>
  );
};

export default Farm;
