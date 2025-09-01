import React from "react";
import Hero from "./Hero";

const Container = () => {
  return (
    <div className="h-[200vh]">
      <Hero />
      {/* CONTENT WITH FIXED SIDEBAR */}
      <div className="flex relative">
        {/* FIXED SIDEBAR */}
        <aside className="w-64 h-screen fixed top-screen left-0 bg-gray-900 text-white">
          <nav className="space-y-4">
            <a href="#section1" className="block hover:text-gray-300">
              Section 1
            </a>
            <a href="#section2" className="block hover:text-gray-300">
              Section 2
            </a>
            <a href="#section3" className="block hover:text-gray-300">
              Section 3
            </a>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Container;
