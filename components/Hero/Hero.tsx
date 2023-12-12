"use client";
import Reveal from "../shared/Reveal";
import Socials from "../shared/Socials";

export default function Hero() {
  return (
    <div className="flex flex-col pb-4 pt-20 px-10 gap-6 md:flex-row md:px-24 items-center">
      <div className="py-4 w-full md:w-1/2">
        <Reveal delay={0}>
          <p className="text-center md:text-left">Welcome to The Net VR</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="py-2">
            <h1 className="uppercase text-6xl font-bold text-center md:text-left md:text-8xl">
              Join the
            </h1>
            <h1 className="uppercase text-6xl font-bold text-center md:text-left md:text-8xl">
              Space
            </h1>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            accusamus praesentium at nesciunt aliquam, rerum non sapiente ut
            eaque quasi et totam. Voluptatibus quo quas officia sequi. Labore,
            ab laudantium.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="flex items-center gap-8">
            <button className="bg-red-800 rounded text-white p-5">
              Get In touch
            </button>
            <Socials />
          </div>
        </Reveal>
      </div>
      <div className="w-1/2 flex justify-end">
        <Reveal delay={0} right={true}>
          <img
            className="rounded"
            src="https://media.mutualart.com/Images/2023_09/13/16/163841441/katia-zoubtchenko-undergrowth--1964-15WQ2.Jpeg?w=480"
            alt="test"
            width={450}
          />
        </Reveal>
      </div>
    </div>
  );
}
