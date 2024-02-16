"use client";

import React from "react";
import Reveal from "../shared/Reveal";

const theater_img_array = [
  "theater_one_yellow",
  "theater_two_red",
  "theater_three_blue",
  "theater_four_white",
];
const theater_names = [
  "Yellow Theater",
  "Red Theater",
  "Blue Theater",
  "White Theater",
];
const theater_descriptions = [
  "A theater with bright yellow lines on the ceiling and colorful patterns on the walls.",
  "A theater with bright red lines on the ceiling and walls.",
  "A theater with bright blue patterns on the ceiling and walls.",
  "A theater with bright white lines on the ceiling and colorful patterns on the walls.",
];

export default function PartyHost() {
  return (
    <div
      id="our-theaters"
      className="flex flex-col py-4 px-10 lg:px-20 xl:px-72 md:py-16 gap-6"
    >
      <Reveal delay={0.2}>
        <h1 className="text-center md:text-start text-5xl font-bold">
          Our Theaters
        </h1>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {[1, 2, 3, 4].map((cardNum, idx) => (
          <Reveal delay={cardNum / 6} key={idx}>
            <div>
              <img
                src={`/images/partyhost/${theater_img_array[idx]}.jpg`}
                alt="test"
                className="rounded-xl"
              />
              <div className="py-4 text-center">
                <h3 className="text-2xl font-semibold pb-5">
                  {theater_names[idx]}
                </h3>
                <p className="text-xl">{theater_descriptions[idx]}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
