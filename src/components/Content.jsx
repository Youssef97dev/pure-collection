import React from "react";
import Image from "next/image";
import Link from "next/link";
import Riad from "./Riad";
import Farm from "./Farm";
import Boho from "./Boho";

const Content = () => {
  return (
    <section className="grid grid-cols-[210px_1fr_1fr_1fr] gap-4 pt-6 h-screen">
      {/* Sidebar */}
      <aside className=" text-black p-1 flex flex-col justify-between items-start">
        <ul className="space-y-5 uppercase">
          <li>
            <a
              href="#"
              className="text-[21px] leading-[20px] mb-2 block hover:underline "
            >
              Pure Collection
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[21px] leading-[20px] mb-2 block hover:underline "
            >
              Pure Fit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[21px] leading-[20px] mb-2 block hover:underline "
            >
              Event Calendar
            </a>
          </li>
        </ul>
        <ul className="space-y-8 ">
          <li className="text-[21px] leading-[2px]">
            <Link href="#">{`Instagram`}</Link>
          </li>
          <li className="flex justify-start items-start gap-4 text-[21px] leading-[2px]">
            <Link href="#">EN</Link>
            <Link href="#">FR</Link>
          </li>
          <li className="flex flex-col justify-start items-start gap-0 lowercase text-[14px]">
            <Link href="#">{`reservations@purehousemarrakech.com`}</Link>
            <Link href="#">{`+212 6 82 22 52 35`}</Link>
          </li>
          <li className="lowercase text-[14px]">
            <Link href="#">{`16 Derb Abou El Fdail, Marrakech 40000 Morocco`}</Link>
          </li>
        </ul>
      </aside>

      {/* 3 Content Columns */}
      <Riad />
      <Farm />
      <Boho />
    </section>
  );
};

export default Content;
