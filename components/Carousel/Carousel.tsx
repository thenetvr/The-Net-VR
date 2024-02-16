"use client";
import React, { useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'

interface props {
  slides: string[]
}
export default function Carousel({ slides }: props) {

  let [current, setCurrent] = useState(0)

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className='overflow-hidden relative'>
      <div className={`flex transition ease-out duration-40`}
        style={{
          transform: `translate-x-[${current * 100}%]`,
        }}  >
        {slides.map((s) => {
          return <img src={s} />
        })}
      </div>
      <div className='absolute top-0 h-full w-full justify-between items-center flex text-white'>
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div >
  )
}
