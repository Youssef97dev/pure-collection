"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Content from "./Content";
import ContentMobile from "./ContentMobile";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";

const Container = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768); // you can adjust breakpoint
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true); // trigger fade
      setTimeout(() => setShowLoader(false), 500); // wait fade duration
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Hero />
      {isMobile ? <ContentMobile /> : <Content />}
      {!isMobile && (
        <Link
          href="#"
          className="fixed z-50 text-center text-white top-56 right-0 writing-mode-vertical-rl  bg-bg_button py-5 px-2"
        >
          {t("intro.book")}
        </Link>
      )}

      {/* Loader sits on top */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-500 ${
            hideLoader ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Container;
