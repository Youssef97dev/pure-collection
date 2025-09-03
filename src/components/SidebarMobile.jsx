"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import i18next from "../../i18n";
import { Transition } from "@headlessui/react";

const SidebarMobile = ({ isOpen, setIsOpen }) => {
  const [isClient, setIsClient] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
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
              <Link href="https://www.instagram.com/pure_house_marrakech/">{`Instagram`}</Link>
            </li>
            <li className="flex justify-start items-start gap-4">
              <div onClick={() => changeLanguage("en")}>EN</div>
              <div onClick={() => changeLanguage("fr")}>FR</div>
            </li>
            <li className="flex flex-col justify-start items-start gap-0 lowercase">
              <Link href="#">{`reservations@purehousemarrakech.com`}</Link>
              <Link
                href="http://wa.me/212682225235"
                target="_blank"
              >{`+212 6 82 22 52 35`}</Link>
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
    )
  );
};

export default SidebarMobile;
