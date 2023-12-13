"use client";
import React from "react";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";

export default function InTouch() {
  return (
    <div className="flex flex-col justify-center px-10 lg:px-20 xl:px-72 py-32 gap-6 items-center">
      <Reveal delay={0}>
        <h1 className="text-2xl uppercase">UNDERGROUND FAVES</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex justify-center">
          <p className="lg:w-3/5 w-full text-center md:text-3xl text-md">
            Maybe you’re needing to blow off some serious steam with an
            all-night party, or wanting to impress someone special with a venue
            that’s a little more discreet and sophisticated. Either way, if
            you’re looking to dance the night away, check out one of the lively
            music venues, dance halls, and raucous haunts.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <Button text="Get In Touch" />
      </Reveal>
    </div>
  );
}
