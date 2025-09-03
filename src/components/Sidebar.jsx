"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import i18next from "../../i18n";

const Sidebar = () => {
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
      <aside className=" text-black p-1 flex flex-col justify-between items-start">
        <ul className="space-y-5 uppercase">
          <li>
            <Link
              href="#"
              className="text-[18px] leading-[20px] mb-2 block hover:text-bg_button"
            >
              Pure Collection
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[18px] leading-[20px] mb-2 block hover:text-bg_button"
            >
              Pure Fit
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[18px] leading-[20px] mb-2 block hover:text-bg_button"
            >
              Event Calendar
            </Link>
          </li>
        </ul>
        <ul className="space-y-8 ">
          <li className="text-[18px] leading-[2px]">
            <Link
              href="https://www.instagram.com/pure_house_marrakech/"
              className="hover:text-bg_button"
            >{`Instagram`}</Link>
          </li>
          <li className="flex justify-start items-start gap-4 text-[18px] leading-[2px]">
            <div
              onClick={() => changeLanguage("en")}
              className="cursor-pointer hover:text-bg_button"
            >
              EN
            </div>
            <div
              onClick={() => changeLanguage("fr")}
              className="cursor-pointer hover:text-bg_button"
            >
              FR
            </div>
          </li>
          <li className="flex flex-col justify-start items-start gap-0 lowercase text-[12px]">
            <Link href="#">{`reservations@purehousemarrakech.com`}</Link>
            <Link
              href="http://wa.me/212682225235"
              target="_blank"
            >{`+212 6 82 22 52 35`}</Link>
          </li>
          <li className="lowercase text-[12px]">
            <Link href="#">{`16 Derb Abou El Fdail, Marrakech 40000 Morocco`}</Link>
          </li>
        </ul>
      </aside>
    )
  );
};

export default Sidebar;
