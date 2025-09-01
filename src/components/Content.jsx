import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <section className="grid grid-cols-[180px_1fr_1fr_1fr] gap-4 pt-6 h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-2">Sidebar</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block hover:underline">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="block hover:underline">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="block hover:underline">
              Link 3
            </a>
          </li>
        </ul>
      </aside>

      {/* 3 Content Columns */}
      <div className="flex flex-col justify-start items-center gap-4 overflow-y-scroll">
        <div className="w-full flex justify-between items-center gap-36">
          <h1 className="text-[21px] leading-[20px] whitespace-nowrap">{`Pure House Riad`}</h1>
          <p className="text-[15px] leading-[15px] text-center">{`where architecture, culture, and gastronomy immerse you in authenticity and the spirit of the Red City`}</p>
        </div>
        <Image
          src="/riad-1.webp"
          alt="pure house riad"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
        <Image
          src="/riad-5.webp"
          alt="pure house riad"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col justify-start items-center gap-4 overflow-y-scroll">
        <div className="w-full flex justify-between items-center gap-36">
          <h1 className="text-[21px] leading-[20px] whitespace-nowrap">{`Pure Farm House`}</h1>
          <p className="text-[15px] leading-[15px] text-center">{`There is no reception to welcome guests to give them the feeling of entering their own home.`}</p>
        </div>
        <Image
          src="/farm-6.webp"
          alt="pure farm house"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
        <Image
          src="/farm-3.webp"
          alt="pure farm house"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col justify-start items-center gap-4 overflow-y-scroll">
        <div className="w-full flex justify-between items-center gap-36">
          <h1 className="text-[21px] leading-[20px] whitespace-nowrap">{`Pure By Lake`}</h1>
          <p className="text-[15px] leading-[15px] text-center">{`test`}</p>
        </div>
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1756372493/dar_ouzguita/boho-2_pdhtun.webp"
          alt="pure house riad"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1756372495/dar_ouzguita/boho-5_ucsjyr.webp"
          alt="pure house riad"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
      </div>
    </section>
  );
};

export default Content;
