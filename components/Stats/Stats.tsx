"use client";
import React from "react";
import Reveal from "../shared/Reveal";

export default function Stats() {
  return (
    <Reveal delay={0}>
      <div className="flex flex-col-reverse py-4 px-4 gap-6 md:flex-row md:px-32 items-center">
        <div className="md:w-1/2 w-full px-24 md:p-0">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold">About Last Night</h2>
            <p className="py-5 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              necessitatibus distinctio natus possimus ex suscipit sed obcaecati
              sapiente non, laudantium ipsa laboriosam soluta porro ducimus.
              Minima blanditiis aspernatur alias culpa.
            </p>
          </div>
          <div className="flex w-full py-12 gap-10 md:gap-16 justify-center md:justify-start text-lg">
            <div>
              <h2 className="text-4xl">20+</h2>
              <p>Music Artists</p>
            </div>
            <div>
              <h2 className="text-4xl">20+</h2>
              <p>Music Artists</p>
            </div>
            <div>
              <h2 className="text-4xl">20+</h2>
              <p>Music Artists</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="test"
          />
        </div>
      </div>
    </Reveal>
  );
}
