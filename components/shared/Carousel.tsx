"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

export default function Carousel({
  data,
}: {
  data: {
    image: string;
    name: string;
    role: string;
  }[];
}) {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-80 h-60 rounded-md overflow-hidden relative">
          <Reveal delay={0} left={true}>
            <div
              ref={carouselRef}
              style={{
                left: -currentImg * carouselSize.width,
              }}
              className="w-full h-full absolute flex transition-all duration-300"
            >
              {data.map((v, i) => (
                <div key={i} className="relative shrink-0 w-full h-full">
                  <Image
                    className="pointer-events-none"
                    alt={v.name}
                    fill
                    src={v.image}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="w-80 h-60 md:h-60 md:w-80 rounded-md overflow-hidden relative">
          <Reveal delay={0} right={true}>
            <div
              ref={carouselRef}
              style={{
                left: -currentImg * carouselSize.width,
              }}
              className="w-full h-full absolute flex transition-all duration-300"
            >
              {data.map((v, i) => (
                <div key={i} className="relative shrink-0 w-full h-full">
                  <div className="pb-2">
                    <h1 className="text-3xl text-center md:text-start">
                      <a
                        className="hover:text-black transition-all"
                        href="https://www.linkedin.com/in/noah-fajarda/"
                        target="_blank"
                      >
                        {v.name}
                      </a>
                    </h1>
                    <p className="text-center md:text-start">{v.role}</p>
                  </div>
                  <p className="pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum esse omnis magnam delectus temporibus! Optio
                    repellendus sunt deserunt illum, unde, iste accusantium
                    fugiat hic qui rerum eaque quia inventore ad.
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="w-full flex justify-center p-3">
        <div className="flex gap-2">
          {data.map((member, idx) => (
            <div
              key={idx}
              className={`${
                currentImg === idx
                  ? `bg-cyan-800 hover:bg-cyan-200`
                  : `bg-red-800 hover:bg-red-200`
              } w-3 h-3 cursor-pointer rounded transition-all`}
              onClick={() => setCurrentImg(idx)}
            ></div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="flex justify-center mt-3 gap-2">
        <button
          disabled={currentImg == 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`border px-4 py-2 font-bold ${
            currentImg == 0 && "opacity-50"
          }`}
        >
          {"<"}
        </button>
        <button
          disabled={currentImg == data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`border px-4 py-2 font-bold ${
            currentImg == data.length - 1 && "opacity-50"
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
