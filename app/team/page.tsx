"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./team.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { TeamMembers } from "../../utils/constants";
import SwiperCore from "swiper";

SwiperCore.use([Navigation]);

export default function page() {
  const totalSlides = TeamMembers.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const size = useWindowSize();

  return (
    <div>
      <h1>MEET OUR TEAM</h1>
      <div
        className={`p-5 flex ${
          size.width > 1000 ? "flex-row-reverse" : "flex-col"
        }
      `}
      >
        <div className="flex flex-col gap-3 w-full h-48">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl">{TeamMembers[currentIndex].name}</h2>
            <h5>{TeamMembers[currentIndex].role}</h5>
            <h5>{TeamMembers[currentIndex].linkedIn}</h5>
          </div>
          <div>{TeamMembers[currentIndex].description}</div>
        </div>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          // additional
          spaceBetween={10}
          className={`h-96 rounded-lg ${
            size.width > 1000 ? "w-3/5" : "w-full"
          }`}
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          pagination={true}
          // state management
          onSlideChange={handleSlideChange}
          navigation
        >
          {TeamMembers.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex h-full w-full items-center justify-center">
                <img src={member.image} alt="slide_image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
