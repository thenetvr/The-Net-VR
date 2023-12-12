"use client";
import Image from "next/image";
import Reveal from "../shared/Reveal";

export default function Hero() {
  const socials = ["discord", "facebook", "instagram", "twitter", "youtube"];
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
            <div>
              <h1 className="font-bold flex items-center gap-3">
                {socials.map((social, idx) => (
                  <a
                    href="https://www.youtube.com"
                    className="flex hover:bg-blue-400 p-1 rounded transition-all"
                  >
                    <Image
                      key={idx}
                      src={`/images/socials/${social}.png`}
                      alt={social}
                      width={30}
                      height={30}
                    />
                  </a>
                ))}
              </h1>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="w-1/2 flex justify-end">
        <Reveal delay={0} right={true}>
          <img
            className="rounded"
            src="https://assets-global.website-files.com/62f35224774781301ab36d72/62f66d0b270e0c5fb4112e28_Rectangle%2013%20(1)-p-500.jpg"
            alt="test"
          />
        </Reveal>
      </div>
    </div>
  );
}
