"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";

const ImageRiad = [
  "/riad/riad-3.webp",
  "/riad/riad-4.webp",
  "/riad/riad-5.webp",
  "/riad/riad-6.webp",
  "/riad/riad-8.webp",
  "/riad/riad-9.webp",
  "/riad/riad-11.webp",
  "/riad/riad-12.webp",
  "/riad/riad-13.webp",
  "/riad/riad-14.webp",
  "/riad/riad-15.webp",
  "/riad/riad-16.webp",
  "/riad/riad-17.webp",
  "/riad/riad-18.webp",
  "/riad/riad-19.webp",
  "/riad/riad-20.webp",
  "/riad/riad-21.webp",
  "/riad/riad-22.webp",
  "/riad/riad-23.webp",
  "/riad/riad-24.webp",
  "/riad/riad-27.webp",
  "/riad/riad-28.webp",
  "/riad/riad-29.webp",
  "/riad/riad-30.webp",
  "/riad/riad-31.webp",
  "/riad/riad-32.webp",
  "/riad/riad-33.webp",
  "/riad/riad-35.webp",
  "/riad/riad-36.webp",
  "/riad/riad-37.webp",
  "/riad/riad-38.webp",
  "/riad/riad-39.webp",
  "/riad/riad-40.webp",
  "/riad/riad-41.webp",
  "/riad/riad-42.webp",
  "/riad/riad-43.webp",
  "/riad/riad-44.webp",
  "/riad/riad-45.webp",
  "/riad/riad-46.webp",
  "/riad/riad-47.webp",
  "/riad/riad-49.webp",
  "/riad/riad-50.webp",
  "/riad/riad-51.webp",
  "/riad/riad-52.webp",
];

const MemoizedImage = React.memo(({ src, alt }) => (
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
MemoizedImage.displayName = "MemoizedImage";

const Riad = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start gap-3 px-7 py-24 bg-riad text-riad_text">
          <h1 className="font-tropic uppercase text-[45px] leading-[57px]">{`Find The Magic`}</h1>
          <p className="uppercase text-[20px] text-justify">
            {t("riad.text_1")}
          </p>
          <div className="w-full flex flex-col justify-center items-center text-[15px]">
            <p className="text-justify">{t("riad.text_2")}</p>
            <p className="text-justify">{t("riad.text_3")}</p>
          </div>
        </div>
        <Image
          src="/riad/riad-10.webp"
          alt="pure house medina"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
        <div className="w-full flex flex-col justify-center items-start gap-3 text-[16px] leading-[25px] px-7 py-24 bg-riad_text text-riad">
          <p className="text-justify">{t("riad.text_4")}</p>
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
            {ImageRiad?.map((image, index) => (
              <Link href={image} key={index}>
                <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
                  <MemoizedImage
                    src={image}
                    alt={`Pure House Medina ${index}`}
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
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure House Medina`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("riad.text_1")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("riad.text_2")}
        </p>
      </div>
      <Image
        src="/riad/riad-10.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/riad/riad-9.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <div className="flex flex-col justify-start items-center gap-0">
        <div className="w-full flex justify-between items-center gap-10">
          <h1 className="text-[18px] leading-[20px] whitespace-nowrap">{`Pure House Medina`}</h1>
          <p className="text-[13px] leading-[15px] text-left">
            {t("riad.text_3")}
          </p>
        </div>
        <p className="text-[13px] leading-[15px] text-left">
          {t("riad.text_4")}
        </p>
      </div>
      <Image
        src="/riad/riad-2.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/riad/riad-5.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
      <Image
        src="/riad/riad-6.webp"
        alt="pure house riad"
        width={1000}
        height={1000}
        className="object-cover w-full"
      />
    </div>*/}
    </>
  );
};

export default Riad;
