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
    img: "/riad/riad-1.webp",
    text: "Slow Living Experiences",
    logo: "/riad/riad-logo-white.png",
  },
  {
    img: "/riad/riad-2.webp",
    text: "Feel The Magic",
    logo: "/riad/riad-logo-white.png",
  },
  {
    img: "/riad/riad-7.webp",
    text: "Where The Stands Still",
    logo: "/riad/riad-logo-white.png",
  },
  {
    img: "/riad/riad-10.webp",
    text: "Exclusive Services",
    logo: "/riad/riad-logo-white.png",
  },
  {
    img: "/riad/riad-34.webp",
    text: "",
    logo: "",
  },
  {
    img: "/riad/riad-51.webp",
    text: "",
    logo: "",
  },
  {
    img: "/riad/riad-48.webp",
    text: "",
    logo: "",
  },
  {
    img: "/riad/riad-53.webp",
    text: "",
    logo: "",
  },
  {
    img: "/riad/riad-26.webp",
    text: "",
    logo: "",
  },
  {
    img: "/riad/riad-25.webp",
    text: "",
    logo: "",
  },
];

const farmImage = [
  {
    img: "/farm/purefarm-47.webp",
    text: "Offering an authentic taste",
    logo: "/farm/farm-logo-white.png",
  },
  {
    img: "/farm/purefarm-35.webp",
    text: "Where The Stands Still",
    logo: "/farm/farm-logo-white.png",
  },
  {
    img: "/farm/purefarm-42.webp",
    text: "Service Tailored To You",
    logo: "/farm/farm-logo-white.png",
  },
  {
    img: "/farm/purefarm-1.webp",
    text: "Feel The Magic",
    logo: "/farm/farm-logo-white.png",
  },
  {
    img: "/farm/purefarm-29.webp",
    text: "",
    logo: "",
  },
  {
    img: "/farm/purefarm-2.webp",
    text: "",
    logo: "",
  },
  {
    img: "/farm/purefarm-53.webp",
    text: "",
    logo: "",
  },
  {
    img: "/farm/purefarm-3.webp",
    text: "",
    logo: "",
  },
  {
    img: "/farm/purefarm-44.webp",
    text: "",
    logo: "",
  },
  {
    img: "/farm/purefarm-4.webp",
    text: "",
    logo: "",
  },
];

const bohoImage = [
  {
    img: "/lake/lake-11.webp",
    text: "Haven of tranquility",
    logo: "/lake/lake-logo-6-white.png",
  },
  {
    img: "/lake/lake-1.webp",
    text: "As above so below",
    logo: "/lake/lake-logo-6-white.png",
  },
  {
    img: "/lake/lake-5.webp",
    text: "Wilderness valley",
    logo: "/lake/lake-logo-6-white.png",
  },
  {
    img: "/lake/lake-33.webp",
    text: "Offering an authentic taste",
    logo: "/lake/lake-logo-6-white.png",
  },
  {
    img: "/lake/lake-27.webp",
    text: "",
    logo: "",
  },
  {
    img: "/lake/lake-8.webp",
    text: "",
    logo: "",
  },
  {
    img: "/lake/lake-9.webp",
    text: "",
    logo: "",
  },
  {
    img: "/lake/lake-13.webp",
    text: "",
    logo: "",
  },
  {
    img: "/lake/lake-30.webp",
    text: "",
    logo: "",
  },
  {
    img: "/lake/lake-29.webp",
    text: "",
    logo: "",
  },
];

const Hero = () => {
  const { t } = useTranslation();
  const { property } = usePure();
  return (
    <div id="hero" className="relative w-full h-screen px-0 2xl:px-20">
      <div className="w-full h-full">
        {/**/}
        {property === "riad" && (
          <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper1"
          >
            {riadImage.map((riad, i) => (
              <SwiperSlide key={i} className="relative">
                <Image
                  src={riad.img}
                  alt="pure collection"
                  height={2000}
                  width={2000}
                  className="object-cover h-screen w-full"
                />
                <div className="w-full absolute bottom-24 xl:bottom-40 left-1/2 transform -translate-x-1/2 text-background text-[28px]  lg:text-[40px] leading-[48px] flex flex-col justify-center items-center gap-5">
                  <div className="">
                    <Image
                      src="/riad/riad-logo-white-2.png"
                      width={1000}
                      height={1000}
                      alt="pure collection"
                      className={`w-32 lg:w-72`}
                    />
                  </div>
                  {/*<div>{riad.text}</div>*/}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {property === "farm" && (
          <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper2"
          >
            {farmImage.map((farm, i) => (
              <SwiperSlide key={i} className="relative">
                <Image
                  src={farm.img}
                  alt="pure collection"
                  height={2000}
                  width={2000}
                  className="object-cover h-screen w-full"
                />
                <div className="w-full absolute bottom-24 xl:bottom-40 left-1/2 transform -translate-x-1/2 text-background text-[28px]  lg:text-[40px] leading-[48px] flex flex-col justify-center items-center gap-5">
                  <div className="">
                    <Image
                      src="/farm/farm-logo-white.png"
                      width={1000}
                      height={1000}
                      alt="pure collection"
                      className={`w-32 lg:w-72`}
                    />
                  </div>
                  {/*<div>{farm.text}</div>*/}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {property === "boho" && (
          <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper3"
          >
            {bohoImage.map((boho, i) => (
              <SwiperSlide key={i} className="relative">
                <Image
                  src={boho.img}
                  alt="pure collection"
                  height={2000}
                  width={2000}
                  className="object-cover h-screen w-full"
                />
                <div className="w-full absolute bottom-24 xl:bottom-40 left-1/2 transform -translate-x-1/2 text-background text-[28px]  lg:text-[40px] leading-[48px] flex flex-col justify-center items-center gap-5">
                  <div className="">
                    <Image
                      src="/lake/lake-logo-white.png"
                      width={1000}
                      height={1000}
                      alt="pure house by the lake"
                      className={`w-28 lg:w-72`}
                    />
                  </div>
                  {/*<div>{boho.text}</div>*/}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Hero;
