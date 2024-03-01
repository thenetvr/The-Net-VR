"use client";
import Button from "../shared/Button";
import Reveal from "../shared/Reveal";
import Socials from "../shared/Socials";
import Image from "next/image";

export default function Hero() {
  return (
      <div className={"bg-[#1E293B] pt-4 pb-8"}>
        <div className={"mt-28"}>
          <div className={"ml-[500px]"}>
          <h1 className={"text-4xl"}>Experience Vr Without A Headset</h1>
            <div className={"ml-4"}>
            <p className={"ml-24 text-lg"}>The Net VR is reinventing Virtual Reality </p>
            <p className={"ml-36 text-lg"}>In the wake of <span className={"text-[#0284C7]"}>MetaVerse </span> </p>
            </div>
        </div>
          <button
              className={"flex border-1 border-[#0284C7] bg-[#0284C7] ml-[700px] mt-4 w-36 h-8 text-white rounded-2xl items-center justify-between"}>
            <div className={"ml-4 text-sm whitespace-nowrap"}>Sign Up Now</div>
            <Image className={"mr-3 bg-black rounded-lg"} src={"/images/blackArrowImage.png"} width={15} height={15}
                   alt={"arrowImage"}/>
          </button>
        </div>
      </div>
  );
}