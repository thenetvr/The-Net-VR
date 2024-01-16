"use client";
import Button from "../shared/Button";
import Reveal from "../shared/Reveal";
import Socials from "../shared/Socials";

export default function Hero() {
  return (
    <div className="flex flex-col pb-4 pt-20 px-10 lg:px-20 xl:px-72 gap-10 md:flex-row items-center">
      <div className="py-4 w-full md:w-1/2">
        <Reveal delay={0}>
          <p className="text-center md:text-left">
            Welcome To The Net VR, Home Of The
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="py-2">
            <h1 className="uppercase text-6xl font-bold text-center md:text-left lg:text-7xl">
              Future of
            </h1>
            <h1 className="uppercase text-6xl font-bold text-center md:text-left lg:text-7xl">
              Live Stream
            </h1>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="py-6">
            The Net VR challenges the impersonal nature of streaming by allowing
            viewers to interact in a 3D space. We deepen the streaming
            experience by fostering personal connections amongst viewers and
            providing a new and exciting potential for revenue to streamers.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="flex items-center gap-8 flex-col md:flex-row">
            <Button
              text="Get In Touch"
              link="https://www.thenetvr.com/#contact"
            />
            <Socials />
          </div>
        </Reveal>
      </div>

      <div className="md:w-1/2 flex md:justify-end justify-center w-full">
        <Reveal delay={0} right={true}>
          <img
            className="rounded"
            src="../../screenshots/screenshot-hero-2.jpg"
            alt="test"
            width={450}
          />
        </Reveal>
      </div>
    </div>
  );
}
