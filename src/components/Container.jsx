"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Content from "./Content";
import ContentMobile from "./ContentMobile";

const Container = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768); // you can adjust breakpoint
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="">
        <Hero />
        {isMobile ? <ContentMobile /> : <Content />}
      </div>
    )
  );
};

export default Container;
