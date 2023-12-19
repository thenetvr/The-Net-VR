"use client";

import React, { useState } from "react";
import Reveal from "../shared/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [option, setOption] = useState(1);

  return (
    <div className="py-20 px-10 lg:px-20 xl:px-72 items-center text-center">
      <Reveal delay={0}>
        <div className="uppercase text-xl">Testimonials</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="p-6 text-4xl font-bold">Upscales Club!</h1>
      </Reveal>
      <Reveal delay={0.3}>
        <div>
          <div>
            {[1, 2, 3].map((test, idx) => (
              <div key={idx}>
                <AnimatePresence mode="wait">
                  {option == test && (
                    <motion.div
                      className="py-16 md:px-12 px-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Reveal delay={0.2}>
                        <p className="text-xl italic">
                          {test}“This place is awesome, the atmosphere is super
                          !!! We spent nice time one night here - electronic
                          music and clear sound, polite servise, prices not too
                          high, everything for good rest!”
                        </p>
                      </Reveal>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="p-10 flex gap-8 justify-center flex-col md:flex-row md:px-10 sm:px-32">
            {[1, 2, 3].map((test, idx) => (
              <Reveal delay={test / 6} key={idx}>
                <div className="w-full">
                  <button
                    key={idx}
                    onClick={() => setOption(test)}
                    className={`bg-red-300 px-10 py-5 rounded-full text-black flex items-center justify-center gap-5 w-full ${test === option && "bg-red-500"
                      }`}
                  >
                    <img
                      className="rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Steph_Curry_P20230117AS-1347_%28cropped%29.jpg"
                      alt="test"
                      width={40}
                    />
                    <p>Jason Mantos</p>
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
