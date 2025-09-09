"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Content from "./Content";
import ContentMobile from "./ContentMobile";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import { usePure } from "@/context/PureHouseContext";

const Container = () => {
  const { t } = useTranslation();
  const { isMobile, changeMobile } = usePure();
  const [hideLoader, setHideLoader] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      changeMobile(window.innerWidth <= 768); // you can adjust breakpoint
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, [changeMobile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      //setHideLoader(false);
      setTimeout(() => setShowLoader(true), 500); // wait fade duration
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hideLoader) {
      setTimeout(() => setShowLoader(false), 700);
    }
  }, [hideLoader]);

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
            {t("intro.book")}
          </Link>
        )}

        {/* Pure Link 
        {showPureLink && (
          <div className="fixed inset-0 z-50">
            <LinkPure setShowPureLink={setShowPureLink} />
          </div>
        )}*/}

        {/* Loader sits on top */}
        {showLoader && (
          <div
            className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
              hideLoader ? "opacity-0" : "opacity-100"
            }`}
          >
            <Loader setHideLoader={setHideLoader} />
          </div>
        )}
      </div>
    )
  );
};

export default Container;
