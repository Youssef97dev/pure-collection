"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Content from "./Content";
import ContentMobile from "./ContentMobile";
import Link from "next/link";

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
      <div className="relative">
        <Hero />
        {isMobile ? <ContentMobile /> : <Content />}
        {!isMobile && (
          <Link
            href="#"
            className="fixed z-50 text-center text-white top-56 right-0 writing-mode-vertical-rl  bg-bg_button py-5 px-2"
          >
            {"Book"}
          </Link>
        )}
      </div>
    )
  );
};

export default Container;
