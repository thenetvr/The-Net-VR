import React from "react";

export default function PartyHost() {
  return (
    <div className="flex flex-col py-4 px-4 md:py-16 gap-6 md:px-32">
      <h1 className="text-center md:text-start text-5xl font-bold">
        Our Party Host
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {[1, 2, 3, 4].map((card, idx) => (
          <div key={idx}>
            <img
              src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
              alt="test"
              className="rounded-xl"
            />
            <div className="py-4">
              <h3 className="text-2xl font-semibold">Etta Green</h3>
              <p className="text-xl">Top 100 Dj's</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
