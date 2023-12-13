"use client";

import React from "react";
import Reveal from "../shared/Reveal";
import Image from "next/image";

export default function MiniGalary() {
  return (
    <div className="flex flex-col py-12 gap-6 px-10 lg:px-20 xl:px-72 lg:py-16">
      <Reveal delay={0}>
        <div className="flex flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((cardNum, idx) => (
            <div key={idx} className="flex md:w-1/3 w-1/2 p-3">
              <div className="flex flex-col gap-2">
                <Image
                  src="https://images.wallpaperscraft.com/image/single/double_exposure_city_girl_126484_2400x2400.jpg"
                  alt="test"
                  width={800}
                  height={800}
                />
                <h1 className="font-semibold text-2xl">test</h1>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
