import React from "react";
// INPUT NEXUI DOCS = https://nextui.org/docs/components/input
import { Input } from "@nextui-org/react";
import Socials from "../shared/Socials";

export default function ContactUs() {
  return (
    <div className="py-4 px-4 md:px-32 items-center text-center flex md:flex-row flex-col">
      <div>
        <h1 className="text-4xl font-bold py-10 lg:text-left text-center">
          Contact Us
        </h1>
        <p className="text-start">
          Fill out the form to attend the most anticipated events in the city
          and get your tickets for the best night party today for you and your
          friends.
        </p>
        <div className="address flex flex-col gap-4 py-4 text-cyan-300">
          <p>169 Water Street, New York, 11226 United States.</p>
          <p>+1 212 425 8617</p>
          <p>office@nightlife.com</p>
        </div>
        <div className="py-5 flex justify-center">
          <Socials />
        </div>
      </div>
      <div>
        <Input
          size="lg"
          isRequired
          variant="underlined"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
}
