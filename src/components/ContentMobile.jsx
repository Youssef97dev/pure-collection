"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Riad from "./Riad";
import Farm from "./Farm";
import Boho from "./Boho";

const ContentMobile = () => {
  const [pure, setPure] = useState("riad");
  const [isOpen, setIsOpen] = useState(false);

  const changeHotel = (name) => {
    setPure(name);
  };

  return (
    <div className="relative w-full px-3">
      {pure === "riad" ? (
        <div
          className={`transition-all duration-500 ease-in-out ${
            pure === "riad" ? "opacity-100" : "opacity-0"
          }`}
        >
          <Riad />
        </div>
      ) : pure === "farm" ? (
        <div
          className={`transition-all duration-500 ease-in-out ${
            pure === "farm" ? "opacity-100" : "opacity-0"
          }`}
        >
          <Farm />
        </div>
      ) : (
        <div
          className={`transition-all duration-500 ease-in-out ${
            pure === "boho" ? "opacity-100" : "opacity-0"
          }`}
        >
          <Boho />
        </div>
      )}

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
            {"Book"}
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
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform translate-y-full opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform translate-y-full opacity-0"
      >
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-sidebar flex flex-col items-left justify-between gap-16 pt-5 uppercase text-[16px] leading-[25px]">
          <ul
            onClick={() => setIsOpen(false)}
            className="space-y-5 text-white pr-80 pl-4"
          >
            <li className="">
              <Link href="#">{`Pure Collection`}</Link>
            </li>
            <li className="">
              <Link href="#">{"Pure Retreat"}</Link>
            </li>
            <li className="">
              <Link href="#">{`Event Calendar`}</Link>
            </li>
          </ul>
          <ul
            onClick={() => setIsOpen(false)}
            className="space-y-3 text-white px-4"
          >
            <li className="">
              <Link href="#">{`Instagram`}</Link>
            </li>
            <li className="flex justify-start items-start gap-4">
              <Link href="#">EN</Link>
              <Link href="#">FR</Link>
            </li>
            <li className="flex flex-col justify-start items-start gap-0 lowercase">
              <Link href="#">{`reservations@purehousemarrakech.com`}</Link>
              <Link href="#">{`+212 6 82 22 52 35`}</Link>
            </li>
            <li className="lowercase">
              <Link href="#">{`16 Derb Abou El Fdail, Marrakech 40000 Morocco`}</Link>
            </li>
            <li
              className="w-full text-center py-2 text-[18px] uppercase"
              onClick={() => setIsOpen(false)}
            >{`Close`}</li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default ContentMobile;
