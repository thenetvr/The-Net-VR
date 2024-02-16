"use client";

import React from "react";
import Reveal from "../shared/Reveal";
import Image from "next/image";

const gdc_image_name = "GDC_Winner-0b2dc93b.png";
const gdc_image_description = "GDC Vault Logo";

export default function Stats() {
  return (
    <Reveal delay={0}>
      <div className="flex flex-col-reverse py-4 px-10 lg:px-20 xl:px-72 gap-6 md:flex-row items-center">
        <div className="md:w-1/2 w-full md:p-0">
          <div className="text-center md:text-left">
            <h2 className="sm:text-5xl text-3xl sm:text-start text-center font-bold">
              Our Accomplishments
            </h2>
            <div className="py-5 md:text-lg text-md sm:text-start text-center flex gap-3 sm:flex-row flex-col items-center">
              <Image
                src={`/images/stats/${gdc_image_name}`}
                alt={gdc_image_description}
                width={50}
                height={50}
              ></Image>
              <p className="flex justify-center items-center">
                Won best in play with GDC 2021.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center w-full py-12 gap-10 md:gap-16 justify-center md:justify-start text-lg">
            <Reveal delay={0.2}>
              <div className="text-center">
                <h2 className="text-4xl">4000+</h2>
                <p>Servers Booted</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="text-center">
                <h2 className="text-4xl">2000+</h2>
                <p>Steam Downloads</p>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="text-center">
                <h2 className="text-4xl">6000+</h2>
                <p>Creator Followers</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="test"
          />
        </div>
      </div>
    </Reveal>
  );
}
