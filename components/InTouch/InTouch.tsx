"use client";
import React from "react";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";

export default function InTouch() {
  return (
    <div className="flex flex-col justify-center px-10 lg:px-20 xl:px-72 py-32 gap-6 items-center">
      <Reveal delay={0}>
        <h1 className="text-2xl uppercase">Initial Reactions</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex justify-center items-center sm:flex-row flex-col">
          <p className=" w-full text-center md:text-1xl text-md m-4">
            "This is so much more advanced than I thought. This kind of viewing
            is nuts. I didn't even think this could be done, but it's here."
          </p>
          <p className=" w-full text-center md:text-1xl text-md m-4">
            "I have friends I watch streams with and we just sit in discord and
            talk. That is just the next evolution of being able to meet other
            people. That's dope."
          </p>
          <p className=" w-full text-center md:text-1xl text-md m-4">
            "This is what's been missing for my viewers. Community.
            Interactivity. Connection. I'm stoked"
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <Button text="Get In Touch" link="https://www.thenetvr.com/#contact" />
      </Reveal>
    </div>
  );
}
