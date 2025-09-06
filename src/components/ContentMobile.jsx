"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import Link from "next/link";
import Riad from "./Riad";
import Farm from "./Farm";
import Boho from "./Boho";
import SidebarMobile from "./SidebarMobile";

import { usePure } from "@/context/pureContext";

const componentsMap = {
  riad: <Riad />,
  farm: <Farm />,
  boho: <Boho />,
};

const ContentMobile = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { property, changeHotel } = usePure();

  return (
    <div className="relative w-full p-3">
      <TransitionGroup>
        <CSSTransition
          key={property} // unique key for each component
          timeout={500} // duration of animation
          classNames="fade"
        >
          <div>{componentsMap[property]}</div>
        </CSSTransition>
      </TransitionGroup>

      {property === "riad" ? (
        <button
          onClick={() => {
            changeHotel("farm");
          }}
          className="fixed top-56 right-0 writing-mode-vertical-rl uppercase bg-background px-2 h-52 z-50 cursor-pointer"
        >
          {"Pure Farm House"}
        </button>
      ) : property === "farm" ? (
        <button
          onClick={() => changeHotel("boho")}
          className="fixed top-56 right-0 writing-mode-vertical-rl uppercase bg-background px-2 h-52 z-50 cursor-pointer"
        >
          {"Pure House By The Lake"}
        </button>
      ) : (
        <></>
      )}

      {property === "farm" ? (
        <button
          onClick={() => changeHotel("riad")}
          className="fixed top-56 left-0 writing-mode-vertical-rl uppercase bg-background px-2 h-52 z-50 cursor-pointer"
        >
          {"Pure House Medina"}
        </button>
      ) : property === "boho" ? (
        <button
          onClick={() => changeHotel("farm")}
          className="fixed top-56 left-0 writing-mode-vertical-rl uppercase bg-background px-2 h-52 z-50 cursor-pointer"
        >
          {"Pure Farm House"}
        </button>
      ) : (
        <></>
      )}

      <div className="fixed bottom-0 left-0 right-0 px-3">
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <div className="w-full bg-bg_button text-white text-center py-2 text-[18px] uppercase">
            {t("intro.book")}
          </div>

          <div
            onClick={() => setIsOpen(true)}
            className=" w-full bg-white text-black text-center py-2 text-[18px] uppercase"
          >
            {"Menu"}
          </div>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ContentMobile;
