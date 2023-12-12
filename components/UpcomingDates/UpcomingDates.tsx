"use client";
import React, { useState } from "react";
import Reveal from "../shared/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function UpcomingDates() {
  const [option, setOption] = useState(1);

  return (
    <div className="py-4 px-4 md:px-32 items-center text-center">
      <Reveal delay={0}>
        <div className="uppercase text-xl">Dates For Our</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="p-6 text-4xl font-bold">Upcoming Events</h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-xl">
          View our event calendar to see upcoming events. Purchase tickets, VIP
          Bar Cards, or reserve VIP tables with bottle service.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div>
          <div className="p-10 flex gap-8 justify-center">
            {[1, 2, 3].map((test, idx) => (
              <button
                key={idx}
                onClick={() => setOption(test)}
                className={`bg-red-300 px-10 py-5 rounded-lg text-black ${
                  test === option && "bg-red-500"
                }`}
              >
                {test}
              </button>
            ))}
          </div>
          <div>
            {[1, 2, 3].map((test, idx) => (
              <div key={idx}>
                <AnimatePresence mode="wait">
                  {option == test && (
                    <motion.div
                      className="py-16 px-12 bg-red-500 text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h1 className="text-3xl font-bold">
                        Skillet at DJO Night Club{test}
                      </h1>
                      <h2 className="font-medium py-2">
                        22 december / doors open at 23:00
                      </h2>
                      <p className="py-10">
                        Legends of American Hard Rock – Skillet Music for the
                        first time with a solo concert in Lviv!On November 19th
                        at Malevich Night Club, rockers will be presenting a new
                        record as part of the Victorious Tour, and it will be
                        something incredible!
                      </p>
                      <p className="text-3xl font-bold">$40</p>
                      <div className="py-3">
                        <a
                          href="/contact"
                          className="font-bold text-xl underline"
                        >
                          Get Tickets
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
