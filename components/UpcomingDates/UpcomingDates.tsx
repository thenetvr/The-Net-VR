"use client";
import React, { useState } from "react";
import Reveal from "../shared/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import "./UpcomingDates.css";

export default function UpcomingDates() {
  const [option, setOption] = useState(1);

  const upcoming_event_dates = ["Jan 2024", "Feb 2024", "Mar 2024"];

  return (
    <div
      id="upcoming-events"
      className="upcoming-events py-4 px-10 lg:px-20 xl:px-72 items-center text-center"
    >
      <Reveal delay={0}>
        <div className="uppercase text-xl">Dates For Our</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="p-6 text-4xl font-bold">Upcoming Events</h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-xl">
        The net vr is getting ready to re-do the prototype to release a
        more scalable video game for everyone to enjoy. Exact detailed
        dates and times will be provided closer to when we're ready. Follow
        along in the discord (**with link**) for more information
        (https://discord.gg/MksjUMU69Z)
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
                      className="md:py-16 md:px-12 py-7 px-5 bg-red-500 text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h1 className="text-3xl font-bold">
                        Upcoming Beta Play Test {test}
                      </h1>
                      <h2 className="font-medium py-2">
                        {upcoming_event_dates[idx]}
                      </h2>
                      <p className="py-10">
                      The Net VR is getting ready to re-do the prototype to release a
                      more scalable video game for everyone to enjoy. Exact detailed
                      dates and times will be provided closer to when we're ready.
                      Follow along in the discord (with link) for more information
                      (<a href="https://discord.gg/MksjUMU69Z">https://discord.gg/MksjUMU69Z</a>)
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
