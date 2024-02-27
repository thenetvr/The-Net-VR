"use client";
import React, { useReducer, useState } from "react";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import isValidEmail from "@/utils/utils";
import { Resend } from 'resend';

export default function TwitchStreamer() {
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
      twitch_id: ""
    }
  );

  const handleFormSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { first, last, twitch_id } = state;

    // error handling
    if (!first || !last || !twitch_id) {
        console.error("Please Make A Valid Entry For All Fields");
        return;
    }

    // send data to twitch signup.
    //TwitchSignup(first, last, twitch_id);
  }

  return (
    <div className="left flex flex-col py-12 gap-6 px-10 lg:px-20 xl:px-72 lg:py-16">
      <Reveal delay={0}>
        <h1 className="left text-4xl font-bold lg:text-center text-center">
          Twitch Streamer?
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex justify-left">
          <p className=" w-fullj lg:text-left md:text-1xl text-md m-4">
            We know community is the heart of a successful streaming channel. Stand out from the crowd and give your followers a unique interactive way to watch your stream and build connections with other followers.
            <br></br><br></br>
            Use your Twitch ID to sign up with our service so that any time you go online, we create a virtual theater for your watchers to join!
          </p>
        </div>
      </Reveal>
      <form className="w-full text-center items-center justify-center flex flex-wrap">
        <div className="p-4 md:w-1/4 w-full">
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
        <div className="p-4 md:w-1/4 w-full">
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
        <div className="p-4 md:w-1/4 w-full">
          <Reveal delay={0.4}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="text"
              label="Twitch ID"
              placeholder="Enter Your Twitch ID"
              value={state.twitch_id}
              onChange={(e) => dispatch({ twitch_id: e.target.value })}
            />
          </Reveal>
        </div>
        {errorMessage && (
          <p className="py-3 text-center w-full italic text-red-400">
            {errorMessage}
          </p>
        )}
        <div className="p-4 w-full">
          <Reveal delay={0.6}>
            <div onClick={handleFormSubmit}>
              <Button text="Submit" link="#"/>
            </div>
          </Reveal>
        </div>
      </form>
    </div>
  );
}
