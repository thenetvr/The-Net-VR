"use client";
import React, { useState } from "react";
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

  return (
    <div>
      <h1>MEET OUR TEAM</h1>
      <div className="p-5 flex md:flex-row-reverse flex-col-reverse">
        <div className="flex flex-col gap-3 w-full h-48">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl">{TeamMembers[currentIndex].name}</h2>
            <h5>{TeamMembers[currentIndex].role}</h5>
            <h5>{TeamMembers[currentIndex].linkedIn}</h5>
          </div>
          <div className="">{TeamMembers[currentIndex].description}</div>
        </div>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          // additional
          spaceBetween={10}
          className="h-96 w-full rounded-lg"
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
