"use client";

import Reveal from "../shared/Reveal";

export default function News() {
  return (
    <div className="flex flex-col py-4 px-4 md:py-16 gap-6 md:px-32">
      <div className="grid grid-cols-5 gap-4">
        <div className="sm:col-span-4 col-span-6">
          <Reveal delay={0.2}>
            <p className="px-6 uppercase text-xl">Blog</p>
          </Reveal>
          <Reveal delay={0.4}>
            <h1 className="p-6 text-4xl font-bold">Read The Latest News</h1>
          </Reveal>
        </div>
        <div className="flex items-end sm:col-end-7">
          <Reveal delay={0.4}>
            <p className="p-6 underline">All News</p>
          </Reveal>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 gap-20 p-5 sm:grid-cols-2 grid-cols-1">
        {[1, 2, 3].map((card, idx) => (
          <div key={idx}>
            <Reveal delay={0.4 + card / 5}>
              <div>
                <div className="flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png"
                    alt="test"
                  />
                </div>
                <div className="flex flex-col gap-4 py-4">
                  <h1 className="font-bold text-2xl">
                    London's Wide Awake Festival{card}
                  </h1>
                  <p>
                    But the team has been super welcoming and I couldn’t be
                    happier with my decision to join.
                  </p>
                  <p>September 2, 2022 in World</p>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
