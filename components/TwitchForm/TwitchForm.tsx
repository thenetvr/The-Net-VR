"use client";

import React, { useReducer, useState } from "react";
// INPUT NEXUI DOCS = https://nextui.org/docs/components/input
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Socials from "../shared/Socials";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";
import isValidEmail from "@/utils/utils";

export default function ContactUs() {
  const [errorMessage, setErrorMessage] = useState("");
  const [state, dispatch] = useReducer(
    // @ts-ignore
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
      twitchId: "",
    }
  );

  const handleFormSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { first, last, twitchId } = state;
    setErrorMessage("");

    // error handling
    if (!first || !last || !twitchId) {
      setErrorMessage("Please Make A Valid Entry For All Fields");
      return;
    }

    try {
      const res = await fetch(`/api/twitch/webpageSignUpFormHandler`, {
        method: "POST",
        body: JSON.stringify({
          first,
          last,
          twitchId,
        }),
      });
      const result = await res.json();
      console.log(result);
      setErrorMessage("Success! Your Twitch Channel has been linked.");
    } catch (e) {
      console.log(e);
      setErrorMessage("Something Went Wrong. Please Try Again Later.");
    }
  };

  return (
    <div
      id="contact"
      className="py-4 px-10 lg:px-20 xl:px-72 md:p-8 items-center text-center flex md:flex-row gap-12 flex-col"
    >
      <div className="w-full md:w-1/3">
        <Reveal delay={0}>
          <h1 className="text-4xl font-bold py-10 lg:text-left text-center">
            Twitch Streamer? 
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-start">
            We know community is the heart of a successful streaming channel. Stand out from the crowd and give your followers a unique interactive way to watch your stream and build connections with other followers.
          </p>
          <p>_______________________</p>
          <p className="text-start">
            Use your Twitch ID to sign up with our service so that any time you go online, we create a virtual theater for your watchers to join!
          </p>
        </Reveal>
      </div>
      <form className="w-full flex flex-wrap md:w-2/3">
        <div className="p-4 md:w-1/2 w-full">
          <Reveal delay={0}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="text"
              label="First Name"
              placeholder="Enter Your First Name"
              value={state.first}
              onChange={(e) => dispatch({ first: e.target.value })}
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
              value={state.last}
              onChange={(e) => dispatch({ last: e.target.value })}
            />
          </Reveal>
        </div>
        
        <div className="p-4 w-full">
          <Reveal delay={0.8}>
            <Textarea
              key="underlined"
              isRequired
              variant="underlined"
              label="Twitch ID"
              placeholder="Enter your Twitch ID"
              value={state.twitchId}
              onChange={(e) => dispatch({ twitchId: e.target.value })}
              size="lg"
            />
          </Reveal>
        </div>
        {errorMessage && (
          <p className="py-3 text-center w-full italic text-red-400">
            {errorMessage}
          </p>
        )}
        <div className="p-4 w-full">
          <Reveal delay={1}>
            <div onClick={handleFormSubmit}>
              <Button text="Submit" />
            </div>
          </Reveal>
        </div>
      </form>
    </div>
  );
}
