"use client";

import Reveal from "../shared/Reveal";

export default function News() {

  // Proably can make this into prop so can call it from somewhere else
  const news = [
    { nameCard: 'Disrupt Magazine (Tech + Startups)', image: 'http://3.143.19.230/assets/Disrupt_Magazine-b706d534.png', date: 'May 16, 2022', body: 'DKyle Doran and The Net VR Creates a Unique and Innovative Experience for Livestreamers and Viewers' },
    { nameCard: 'Free Apps For Me', image: 'http://3.143.19.230/assets/Home-Theater1-1698e2af.png', date: 'April 27, 2022', body: 'The Net VR Theater Game Review' },
    { nameCard: 'A Gaming Moment (podcast)', image: 'http://3.143.19.230/assets/Home-Theater2-2a0a8d71.png', date: 'February 11, 2022', body: 'S3E4: What is VR With Kyle Doran CEO of The Net VR' },
  ]
  return (
    <div className="flex flex-col py-4 md:py-16 gap-6 px-10 lg:px-20 xl:px-72">
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
        {news.map((card, idx) => (
          <div key={idx}>
            <Reveal delay={0.4 + (idx + 1) / 5}>
              <div>
                <div className="flex justify-center">
                  <img
                    src={card.image}
                    alt="test"
                  />
                </div>
                <div className="flex flex-col gap-4 py-4">
                  <h1 className="font-bold text-2xl">
                    {card.nameCard}
                  </h1>
                  <p>
                    {card.body}
                  </p>
                  <p>{card.date}</p>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
