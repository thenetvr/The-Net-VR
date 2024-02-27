"use client";

import Reveal from "../shared/Reveal";
import Image from "next/image";
export default function News() {

  const news = [
    {
      id:1,
      image: "/images/newsImage1.png",
      title: "Disrupt Magazine (Tech + Startups)",
      content: "Kyle Doran and The Net vr Creates a unique and \n innovative experience from live streamers and viewers",
      date: <div className={"inline-block"}>May, 16th<br/>2022</div>
    },
    {
      id:2,
      image: "/images/newsImage2.png",
      title: "Free Apps For Me",
      content: "The Net Vr Theater Game Reviews",
      date: <div className={"inline-block"}>April, 27th<br/>2022</div>
    },
    {
      id:3,
      image: "/images/newsImage3.png",
      title: "A Gaming Moment (podcast)",
      content: "S3:E4 What is VR with Kyle Doran CEO of the Net Vr",
      date: <div className={"inline-block"}>February, 11th<br/>2022</div>
    }
  ]


  return (
      <div className={"bg-[#1E293B] pt-4 pb-8"}>
        <h1 className={"ml-72 text-2xl font-bold mb-4"}>LATEST NEWS</h1>
        <div className={"border-b-2 border-[#0284C7]"}></div>
        {news.map((section, key) => {
            return (
                <div className={"flex border-b-2 border-[#0284C7]"}>
                  <div className={"mr-20 mb-6 mt-6 ml-72"}>
                    <Image src={section.image} alt={"newsImage"} width={275} height={120}/>
                  </div>
                  <div className={"w-[55%]"}>
                    <h3 className={"text-xl mt-6 font-bold"}>{section.title}</h3>
                    <p className={"mt-4"}>{section.content}</p>
                    <div className={"flex items-end justify-between h-[52%]"}>
                      {section.date}
                      <button
                          className={"flex border-1 border-[#0284C7] bg-[#1E293B] w-36 h-8 text-white rounded-2xl items-center justify-between"}>
                        <div className={"ml-4 text-sm whitespace-nowrap"}>Read More</div>
                        <Image className={"mr-3"} src={"/images/blueArrowImage.png"} width={15} height={15}
                               alt={"arrowImage"}/>
                      </button>
                    </div>
                  </div>
                </div>
            )
        })}
        <button className={"flex border-1 border-[#0284C7] bg-[#0284C7] mx-auto mt-8 w-36 h-8 text-white rounded-2xl items-center justify-between"}>
          <div className={"ml-4 text-sm whitespace-nowrap"}>View More</div>
          <Image className={"mr-3 bg-black rounded-lg"} src={"/images/blackArrowImage.png"} width={15} height={15}
                 alt={"arrowImage"}/>
        </button>
      </div>
  );
}
