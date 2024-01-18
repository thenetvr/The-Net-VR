"use client";

import React from "react";
import Reveal from "../shared/Reveal";
import Image from "next/image";

const gdc_image_name = "GDC_Winner-0b2dc93b.png";
const gdc_image_description = "GDC Vault Logo";

export default function About() {
  return (
    <Reveal delay={0}>
      <div
        id="about"
        className="flex flex-col py-4 pb-20 px-10 lg:px-20 xl:px-72 gap-6 md:flex-row items-center"
      >
        <div className="md:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="test"
          />
        </div>
        <div className="md:w-1/2 w-full md:p-0">
          <div className="text-center md:text-left">
            <h2 className="sm:text-5xl text-3xl sm:text-start text-center font-bold">
              About Us
            </h2>
            <div className="py-5 md:text-lg text-md text-start flex gap-3 sm:flex-row flex-col items-center">
              <p className="flex justify-center items-center sm:text-md">
                We're on a mission to revolutionize Virtual Reality (VR) and
                streaming. At the Net VR, we're not just redefining VR; we're
                also transforming the streaming landscape. By seamlessly
                integrating VR with cutting-edge streaming technologies, we aim
                to elevate your content consumption experience. Join us on this
                exhilarating journey as we redefine the future of VR and
                streaming at The Net VR—where the digital world becomes your
                immersive playground!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
