"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const heroImages = ["/hero-1.webp", "/hero-2.webp", "/hero-3.webp"];

const Hero = () => {
  //const { t } = useTranslation();
  return (
    <div id="hero" className="relative w-full h-screen px-0 2xl:px-20 mb-3">
      <div className="w-full h-full">
        {/**/}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {heroImages.map((hero, i) => (
            <SwiperSlide key={i} className="relative">
              <Image
                src={hero}
                alt="pure collection"
                height={2000}
                width={2000}
                className="object-cover h-screen w-full"
              />
              <div className="w-full absolute bottom-56 xl:bottom-40 left-1/2 transform -translate-x-1/2 text-background text-[28px]  lg:text-[40px] leading-[48px] text-center">
                {"Slow Living Experiences"}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 text-white z-40">
        <Image
          src={"/Logo.svg"}
          width={1000}
          height={1000}
          alt="pure collection"
          className={`w-40 lg:w-52`}
        />
      </div>
    </div>
  );
};

export default Hero;
