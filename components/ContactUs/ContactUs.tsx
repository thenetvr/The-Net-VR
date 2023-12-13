"use client";

import React from "react";
// INPUT NEXUI DOCS = https://nextui.org/docs/components/input
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Socials from "../shared/Socials";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";

export default function ContactUs() {
  return (
    <div className="py-4 px-10 lg:px-20 xl:px-72 md:p-8 items-center text-center flex md:flex-row gap-12 flex-col">
      <div className="w-full md:w-1/3">
        <Reveal delay={0}>
          <h1 className="text-4xl font-bold py-10 lg:text-left text-center">
            Contact Us
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-start">
            Fill out the form to attend the most anticipated events in the city
            and get your tickets for the best night party today for you and your
            friends.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="address flex flex-col gap-4 py-4 text-cyan-300 md:text-left text-center">
            <p>169 Water Street, New York, 11226 United States.</p>
            <p>+1 212 425 8617</p>
            <p>office@nightlife.com</p>
          </div>
        </Reveal>
        <Reveal delay={0.6}>
          <div className="py-5 flex md:justify-start justify-center">
            <Socials />
          </div>
        </Reveal>
      </div>
      <div className="w-full flex flex-wrap md:w-2/3">
        <div className="p-4 md:w-1/2 w-full">
          <Reveal delay={0}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="text"
              label="First Name"
              placeholder="Enter Your First Name"
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <Reveal delay={0.2}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="text"
              label="Last Name"
              placeholder="Enter Your Last Name"
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <Reveal delay={0.4}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <Reveal delay={0.6}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="number"
              label="Phone Number"
              placeholder="Enter Your Phone Number"
            />
          </Reveal>
        </div>
        <div className="p-4 w-full">
          <Reveal delay={0.8}>
            <Textarea
              key="underlined"
              isRequired
              variant="underlined"
              label="Description"
              placeholder="What Would You Like To Tell Us?"
              size="lg"
            />
          </Reveal>
        </div>
        <div className="p-4 w-full">
          <Reveal delay={1}>
            <Button text="Submit" />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
