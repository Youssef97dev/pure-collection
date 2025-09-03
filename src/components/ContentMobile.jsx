"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import Link from "next/link";
import Riad from "./Riad";
import Farm from "./Farm";
import Boho from "./Boho";
import SidebarMobile from "./SidebarMobile";

const componentsMap = {
  riad: <Riad />,
  farm: <Farm />,
  boho: <Boho />,
};

const ContentMobile = () => {
  const { t } = useTranslation();
  const [pure, setPure] = useState("riad");
  const [isOpen, setIsOpen] = useState(false);

  const changeHotel = (name) => {
    setPure(name);
  };

  return (
    <div className="relative w-full px-3">
      <TransitionGroup>
        <CSSTransition
          key={pure} // unique key for each component
          timeout={500} // duration of animation
          classNames="fade"
        >
          <div>{componentsMap[pure]}</div>
        </CSSTransition>
      </TransitionGroup>

      {pure === "riad" ? (
        <button
          onClick={() => changeHotel("farm")}
          className="fixed top-56 right-0 writing-mode-vertical-rl uppercase bg-background px-2 h-40"
        >
          {"Pure Farm House"}
        </button>
      ) : pure === "farm" ? (
        <button
          onClick={() => changeHotel("boho")}
          className="fixed top-56 right-0 writing-mode-vertical-rl uppercase bg-background px-2 h-40"
        >
          {"Pure By Lake"}
        </button>
      ) : (
        <></>
      )}

      {pure === "farm" ? (
        <button
          onClick={() => changeHotel("riad")}
          className="fixed top-56 left-0 writing-mode-vertical-rl uppercase bg-background px-2 h-40"
        >
          {"Pure House Riad"}
        </button>
      ) : pure === "boho" ? (
        <button
          onClick={() => changeHotel("farm")}
          className="fixed top-56 left-0 writing-mode-vertical-rl uppercase bg-background px-2 h-40"
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
