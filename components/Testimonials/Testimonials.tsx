"use client";

import React, { useState } from "react";
import Reveal from "../shared/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [option, setOption] = useState(1);

  const tester = [
    {
      id: 1,
      name: "NovaElu",
      comment:
        "I do like that idea thats really cool, thats so dope, big hype. those screen shots are awsome.",
      image:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/21212c3c-69bc-4d37-bf0f-eedd84305376-profile_image-70x70.png",
    },
    {
      id: 2,
      name: "Roberts_19111TV",
      comment:
        "you don't need a vr headset you can do it on your pc and a phone. this is so much advance than I thought. This is amazing I didn't think that could be done",
      image:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/a586d3c8-e74b-43aa-805c-ecf68cc01343-profile_image-70x70.png",
    },
    {
      id: 3,
      name: "AcooZi",
      comment:
        "I have friends I watch streams and we would sit in discord and talk and that is the next evolution of being to meet other people that is dope",
      image:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/d521ea7d-5577-4ed2-9f21-b83f55beec7c-profile_image-70x70.png",
    },
  ];

  return (
    <div className="py-20 px-10 lg:px-20 xl:px-72 items-center text-center">
      <Reveal delay={0}>
        <div className="uppercase text-xl">Our Streamers'</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="p-6 text-4xl font-bold">Testimonials</h1>
      </Reveal>
      <Reveal delay={0.3}>
        <div>
          <div>
            {tester.map((test, idx) => (
              <div key={idx}>
                <AnimatePresence mode="wait">
                  {option == test.id && (
                    <motion.div
                      className="py-16 md:px-12 px-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Reveal delay={0.2}>
                        <p className="text-xl italic">
                          {test.name} "{test.comment}"
                        </p>
                      </Reveal>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="p-10 flex gap-8 justify-center flex-col md:flex-row md:px-10 sm:px-32">
            {tester.map((test, idx) => (
              <Reveal delay={test.id / 6} key={idx}>
                <div className="w-full">
                  <button
                    key={idx}
                    onClick={() => setOption(test.id)}
                    className={`bg-slate-500 px-10 py-5 rounded-full text-white flex items-center justify-center gap-5 w-full ${
                      test.id === option && "bg-slate-800"
                    }`}
                  >
                    <img
                      className="rounded-lg"
                      src={test.image}
                      alt="streamer pfp"
                      width={40}
                    />
                    <p>{test.name}</p>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
