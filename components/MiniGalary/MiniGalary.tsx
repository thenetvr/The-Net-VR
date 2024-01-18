"use client";

import React from "react";
import Reveal from "../shared/Reveal";
import Image from "next/image";

const img_array = [
  "NetVRTheaterHostYourOwnContent.webp-fff68691.png",
  "netVRstreamExample-3ed9f098.png",
  "hostTheater-ab288493.png",
  "the_net_vr_screenshot_12_25_23.jpg",
  "the_net_vr_screenshot_12_25_23_2.jpg",
  "the_net_vr_screenshot_12_25_23_3.jpg",
];

const img_descriptions = [
  "Football",
  "FPS",
  "Configuration",
  "Theater Entrance",
  "League of Legends",
  "Intro",
];

export default function MiniGalary() {
  return (
    <div className="flex flex-col py-12 gap-6 px-10 lg:px-20 xl:px-72 lg:py-16">
      <Reveal delay={0}>
        <div className="flex flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((cardNum, idx) => (
            <div key={idx} className="flex md:w-1/3 sm:w-1/2 w-full p-3">
              <div className="flex flex-col gap-2">
                <div className="sm:h-80 sm:flex">
                  <Image
                    src={`/images/gallery/${img_array[idx]}`}
                    alt={img_descriptions[idx]}
                    width={800}
                    height={800}
                  />
                </div>
                <h1 className="font-semibold text-2xl">
                  {img_descriptions[idx]}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
