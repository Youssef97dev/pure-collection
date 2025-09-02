import React from "react";
import Image from "next/image";
import Riad from "./Riad";
import Farm from "./Farm";
import Boho from "./Boho";

const Content = () => {
  return (
    <section className="grid grid-cols-[180px_1fr_1fr_1fr] gap-4 pt-6 h-screen">
      {/* Sidebar */}
      <aside className=" text-black p-4 flex flex-col justify-between items-start">
        <ul className="space-y-5">
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
        <ul className="space-y-5">
          <li>
            <a
              href="#"
              className="text-[21px] leading-[20px] mb-2 block hover:underline "
            >
              Instagram
            </a>
          </li>
          <li className="flex justify-start items-start gap-4">
            <a
              href="#"
              className="text-[21px] leading-[20px] mb-2 block hover:underline "
            >
              EN
            </a>
            <a
              href="#"
              className="text-[21px] leading-[20px] mb-2 block hover:underline "
            >
              FR
            </a>
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
