"use client";

import React, { useReducer, useState } from "react";
// INPUT NEXUI DOCS = https://nextui.org/docs/components/input
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";
import isValidEmail from "@/utils/utils";

export default function TwitchSignUp() {
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
      email: "",
      twitchName: "",
    }
  );

  const handleFormSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { first, last, email, twitchName } = state;
    setErrorMessage("");

    // error handling
    if (!first || !last || !email || !twitchName) {
      setErrorMessage("Please Make A Valid Entry For All Fields");
      return;
    }
    setErrorMessage("Processing your request...");
    try {
      const res = await fetch(`/api/twitch/webpageSignUpFormHandler`, {
        method: "POST",
        body: JSON.stringify({
          first,
          last,
          email,
          twitchName,
        }),
      });
      const response = await res.json();
      const result = response["formResponse"];
      const twitchUserId = result["twitchUserId"];

      if (result['twitchUserId'] === "invalid"){
        setErrorMessage(`Invalid Twitch Name: No user associated with the name "${twitchName}"`);
      } else if (result['status'] === 409) {
        setErrorMessage("Looks like this Twitch name has already been registered with us.");
      } else if (result["status"] === 400) {
        setErrorMessage("Something went wrong saving your data.");
      } else {
        setErrorMessage("Success! Your Twitch Channel has been linked.");
      }
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
          <div>
            <p className="text-start">
              We know community is the heart of a successful streaming channel. Stand out from the crowd and give your followers a unique interactive way to watch your stream and build connections with other followers.
            </p>
            <p>_______________________</p>
            <p className="text-start">
              Use your Twitch ID to sign up with our service so that any time you go online, we create a virtual theater for your watchers to join!
            </p>
          </div>
        </Reveal>
      </div>
      <form className="w-full flex flex-wrap md:w-1/2">
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
        <div className="p-4 md:w-1/2 w-full">
          <Reveal delay={0.4}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              value={state.email}
              onChange={(e) => dispatch({ email: e.target.value })}
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <Reveal delay={0.8}>
            <Input
              size="lg"
              key="underlined"
              isRequired
              variant="underlined"
              label="Twitch Name"
              placeholder="Enter your Twitch Name"
              value={state.twitchName}
              onChange={(e) => dispatch({ twitchName: e.target.value })}
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
