"use client";
import React, { useReducer, useState } from "react";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import isValidEmail from "@/utils/utils";
import { Resend } from 'resend';

export default function Influencer() {
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
      username: "",
      primary_category: "",
      total_followers: "",
      streaming_channel: "",
      twitter: ""
    }
  );

  const handleFormSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Covfefe")
    e.preventDefault();
    const { first, last, email, username, primary_category, total_followers, streaming_channel, twitter } = state;
    setErrorMessage("");

    // error handling
    if (!first || !last || !email || !username || !primary_category || !total_followers || !streaming_channel || !twitter) {
      setErrorMessage("Please Make A Valid Entry For All Fields");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Please Enter A Valid Email");
      return;
    }

    const resend = new Resend('re_dDgLUZWr_L5cBE');

    try {
      const { data, error } = await resend.emails.send({
        from: 'info@thenetvr.com',
        to: [email],
        subject: `Welcome, ${username}!`,
        html: `<strong>Hello, ${username}! We are sending this email to verify your information.</strong>
              <br>
              First Name:  ${first}<br>
              Last Name:  ${last}<br>
              Email: ${email}<br>
              Username: ${username}<br>
              Primary Category: ${primary_category}<br>
              Total Followers: ${total_followers}<br>
              Streaming Channel: ${streaming_channel}<br>
              Twitter: ${twitter}<br>`,
      });
      if (error) {
        return console.error({ error });
      }
      console.log({ data });
      setErrorMessage("Your Message Was Sent Successfully!");
    } catch (e) {
      console.log(e);
      setErrorMessage("Something Went Wrong. Please Try Again Later.");
    }
  };

  return (
    <div className="flex flex-col py-12 gap-6 px-10 lg:px-20 xl:px-72 lg:py-16">
      <Reveal delay={0}>
        <h1 className="text-4xl font-bold lg:text-left text-center">
          Influencer Program
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex justify-center">
          <p className=" w-full lg:text-left md:text-1xl text-md m-4">
            Net VR Theater can be broadcasted directly to or be hosted with Net VR Stream, Twitch, YouTubeLive and FacebookLive. Sign up for more information!
            <br></br><br></br>
            Net VR Theater in compliance with all platforms mentioned above.*
            <br></br><br></br>
            *Terms of Service are continually changing and The Net VR monitors these terms of services closely to verify compliance. User may not hold The Net VR responsible for any negative actions from their chosen platform. For further information please see our terms of service and your platform's terms of service.
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
              type="email"
              label="Email Address"
              placeholder="Enter Your Email Address"
              value={state.email}
              onChange={(e) => dispatch({ email: e.target.value })}
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/4 w-full">
          <Reveal delay={0.6}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="text"
              label="Platform Username"
              placeholder="Enter Your Platform Username"
              value={state.username}
              onChange={(e) => dispatch({ username: e.target.value })}
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/4 w-full">
          <Reveal delay={0.8}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="text"
              label="Primary Category of Content"
              placeholder="Primary Category of Content"
              value={state.primary_category}
              onChange={(e) => dispatch({ primary_category: e.target.value })}
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/4 w-full">
          <Reveal delay={1.0}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="number"
              label="Total Followers"
              placeholder="Enter Your Total Followers"
              value={state.total_followers}
              onChange={(e) => dispatch({ total_followers: e.target.value })}
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/4 w-full">
          <Reveal delay={1.2}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="text"
              label="Streaming Channel"
              placeholder="Enter Your Streaming Channel"
              value={state.streaming_channel}
              onChange={(e) => dispatch({ streaming_channel: e.target.value })}
            />
          </Reveal>
        </div>
        <div className="p-4 md:w-1/4 w-full">
          <Reveal delay={1.4}>
            <Input
              size="lg"
              isRequired
              variant="underlined"
              type="text"
              label="Twitter"
              placeholder="Enter Your Twitter"
              value={state.twitter}
              onChange={(e) => dispatch({ twitter: e.target.value })}
            />
          </Reveal>
        </div>
        {errorMessage && (
          <p className="py-3 text-center w-full italic text-red-400">
            {errorMessage}
          </p>
        )}
        <div className="p-4 w-full">
          <Reveal delay={1.6}>
            <div onClick={handleFormSubmit}>
              <Button text="Submit" link="#"/>
            </div>
          </Reveal>
        </div>
      </form>
    </div>
  );
}
