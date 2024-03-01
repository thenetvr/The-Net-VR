"use client";
import './ContactUs.css'

import React, { useReducer, useState } from "react";
// INPUT NEXUI DOCS = https://nextui.org/docs/components/input
import { Input, Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Socials from "../shared/Socials";
import Reveal from "../shared/Reveal";

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
      email: "",
      phone: "",
      message: "",
    }
  );

  const handleFormSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { first, last, email, phone, message } = state;
    setErrorMessage("");

    // error handling
    if (!first || !last || !email || !phone || !message) {
      setErrorMessage("Please Make A Valid Entry For All Fields");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Please Enter A Valid Email");
      return;
    }

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          first,
          last,
          email,
          phone,
          message,
        }),
      });
      const result = await res.json();
      console.log(result);
      setErrorMessage("Your Message Was Sent Successfully!");
    } catch (e) {
      console.log(e);
      setErrorMessage("Something Went Wrong. Please Try Again Later.");
    }
  };

  return (
    <div
      id="contact"
      className=" py-4 px-10 lg:px-20 xl:px-72 md:p-8 items-center text-center flex md:flex-row gap-12 flex-col"
    >
      <div className=" contactForm w-full md:w-1/3">
        <Reveal delay={0}>
          <h1 className="header text-4xl font-bold py-10 lg:text-left text-center">
            Contact Us
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="fontText text-start">
            Use the form below to contact us for any special request, inquiries, questions, concerns or support. also feel free to join our community discord
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="py-5 flex md:justify-start justify-center">
            <Socials />
          </div>
        </Reveal>
        <form className="inputGen w-full flex flex-wrap md:w-2/3">
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
            <Reveal delay={0.6}>
              <Input
                size="lg"
                isRequired
                variant="underlined"
                type="number"
                label="Phone Number"
                placeholder="Enter Your Phone Number"
                value={state.phone}
                onChange={(e) => dispatch({ phone: e.target.value })}
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
                value={state.message}
                onChange={(e) => dispatch({ message: e.target.value })}
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
              <div className='text-start ' onClick={handleFormSubmit}>
                <Button className='bg-sky-600'>Send your request</Button>
              </div>
            </Reveal>
          </div>
        </form>
      </div>
    </div>
  );
}
