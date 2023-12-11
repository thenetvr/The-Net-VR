"use client";
import React from "react";
import Reveal from "../shared/Reveal";

export default function InTouch() {
  return (
    <div
      className="flex flex-col justify-center
    
    
    py-32 px-10 gap-6 items-center"
    >
      <Reveal delay={0}>
        <h1 className="text-2xl uppercase">UNDERGROUND FAVES</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="md:w-3/5 w-full text-center text-3xl">
          Maybe you’re needing to blow off some serious steam with an all-night
          party, or wanting to impress someone special with a venue that’s a
          little more discreet and sophisticated. Either way, if you’re looking
          to dance the night away, check out one of the lively music venues,
          dance halls, and raucous haunts.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <button className="bg-red-800 rounded text-white p-5">
          Get In touch
        </button>
      </Reveal>
    </div>
  );
}
