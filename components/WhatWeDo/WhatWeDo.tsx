"use client";
import React from "react";
import Reveal from "../shared/Reveal";

// `The Core values are 3 time, space, and matter.

// Time- Past, Present, and future
// We care about peoples time. When and where they spend it is important to us. Live time is the only part that we can control.

// When the event is live we have the best understanding and full context of an event that is happening in space. This allows us to build for the future and document appropriately for the past.

// Space - 3D space is the key to unlocking virtual worlds. What comes with space is proper boundary settings.

// Matter - Weather it be bits or atoms we focus share on making conscious connections with with other conscious bodies weather it be in the virtual world or in reality.`

//
//
//

// -- What we do
//     -- 1. connect content creators to their viewers in a video game
//     -- 2. allow for more immersion for viewers to connect with their communities
//     -- 3. can share digital assets together
//     -- 4. do immersion not with hardware, but with software
//     -- 5. surf the internet in 3D
//     -- 6.

export default function WhatWeDo() {
  return (
    <div className="flex flex-col py-12 gap-6 px-10 lg:px-20 xl:px-72 lg:py-16">
      <Reveal delay={0}>
        <h1 className="text-4xl font-bold py-16 lg:text-left text-center">
          What We Do
        </h1>
      </Reveal>
      <div className="flex flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((cardNum, idx) => (
          <div key={idx} className="flex 2xl:w-1/3 md:w-1/2 w-full">
            <Reveal delay={cardNum / 10}>
              <div className="block md:flex md:items-center">
                <div className="md:w-40 w-full p-4 flex justify-center">
                  <div className="rounded-full bg-blue-200 h-16 w-16 text-center flex items-center justify-center font-semibold text-2xl text-black">
                    {cardNum}
                  </div>
                </div>
                <div className="p-4 md:text-start text-center">
                  <h1 className="py-4 font-semibold text-2xl">
                    Corportate Events
                  </h1>
                  <p>
                    Creativity corporate events from concept and design, right
                    through to production and management of the event itself.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
