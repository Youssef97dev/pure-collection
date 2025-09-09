"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { usePure } from "@/context/PureHouseContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const riadImage = [
  {
    img: "/riad/riad-8.webp",
    text: "Slow Living Experiences",
    logo: "/riad/riad-logo-white.png",
  },
  {
    img: "/riad/riad-7.webp",
    text: "Feel The Magic",
    logo: "/riad/riad-logo-white.png",
  },
  {
    img: "/riad/riad-4.webp",
    text: "Where The Stands Still",
    logo: "/riad/riad-logo-white.png",
  },
  {
    img: "/riad/riad-1.webp",
    text: "Exclusive Services",
    logo: "/riad/riad-logo-white.png",
  },
];

const farmImage = [
  {
    img: "/farm/purefarm-1.webp",
    text: "Offering an authentic taste",
    logo: "/farm/farm-logo-white.png",
  },
  {
    img: "/farm/purefarm-7.webp",
    text: "Where The Stands Still",
    logo: "/farm/farm-logo-white.png",
  },
  {
    img: "/farm/purefarm-18.webp",
    text: "Service Tailored To You",
    logo: "/farm/farm-logo-white.png",
  },
  {
    img: "/farm/purefarm-13.webp",
    text: "Feel The Magic",
    logo: "/farm/farm-logo-white.png",
  },
];

const bohoImage = [
  {
    img: "/lake/lake-2.webp",
    text: "Haven of tranquility",
    logo: "/lake/lake-logo-6-white.png",
  },
  {
    img: "/lake/lake-4.webp",
    text: "As above so below",
    logo: "/lake/lake-logo-6-white.png",
  },
  {
    img: "/lake/lake-5.webp",
    text: "Wilderness valley",
    logo: "/lake/lake-logo-6-white.png",
  },
  {
    img: "/lake/lake-6.webp",
    text: "Offering an authentic taste",
    logo: "/lake/lake-logo-6-white.png",
  },
];

const Hero = () => {
  const { t } = useTranslation();
  const { property } = usePure();
  return (
    <div id="hero" className="relative w-full h-screen px-0 2xl:px-20">
      <div className="w-full h-full">
        {/**/}
        <Swiper
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {property === "riad"
            ? riadImage.map((riad, i) => (
                <SwiperSlide key={i} className="relative">
                  <Image
                    src={riad.img}
                    alt="pure collection"
                    height={2000}
                    width={2000}
                    className="object-cover h-screen w-full"
                  />
                  {/*<div className="w-full absolute bottom-32 xl:bottom-40 left-1/2 transform -translate-x-1/2 text-background text-[28px]  lg:text-[40px] leading-[48px] flex flex-col justify-center items-center gap-5">
                    <div className="">
                      <Image
                        src={riad.logo}
                        width={1000}
                        height={1000}
                        alt="pure collection"
                        className={`w-36 lg:w-72`}
                      />
                    </div>
                    <div>{riad.text}</div>
                  </div>*/}
                </SwiperSlide>
              ))
            : property === "farm"
            ? farmImage.map((farm, i) => (
                <SwiperSlide key={i} className="relative">
                  <Image
                    src={farm.img}
                    alt="pure collection"
                    height={2000}
                    width={2000}
                    className="object-cover h-screen w-full"
                  />
                  {/*<div className="w-full absolute bottom-32 xl:bottom-40 left-1/2 transform -translate-x-1/2 text-background text-[28px]  lg:text-[40px] leading-[48px] flex flex-col justify-center items-center gap-5">
                    <div className="">
                      <Image
                        src={farm.logo}
                        width={1000}
                        height={1000}
                        alt="pure collection"
                        className={`w-52 lg:w-72`}
                      />
                    </div>
                    <div>{farm.text}</div>
                  </div>*/}
                </SwiperSlide>
              ))
            : bohoImage.map((boho, i) => (
                <SwiperSlide key={i} className="relative">
                  <Image
                    src={boho.img}
                    alt="pure collection"
                    height={2000}
                    width={2000}
                    className="object-cover h-screen w-full"
                  />
                  {/*<div className="w-full absolute bottom-36 xl:bottom-40 left-1/2 transform -translate-x-1/2 text-background text-[28px]  lg:text-[40px] leading-[48px] flex flex-col justify-center items-center gap-5">
                    <div className="">
                      <Image
                        src={boho.logo}
                        width={1000}
                        height={1000}
                        alt="pure collection"
                        className={`w-40 lg:w-72`}
                      />
                    </div>
                    <div>{boho.text}</div>
                  </div>*/}
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
