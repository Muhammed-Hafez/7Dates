"use client";

import "@splidejs/react-splide/css/core";
import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const sliderImages = [
  {
    id: 1,
    image: "/images/slider-images/slide-1.jpg",
  },
  {
    id: 2,
    image: "/images/slider-images/slide-2.jpg",
  },
  {
    id: 3,
    image: "/images/slider-images/slide-3.jpg",
  },
];

function HeroCarousel() {
  return (
    <Splide
      options={{
        arrows: false,
        rewind: true,
        type: "loop",
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        pagination: false,
      }}
    >
      {sliderImages.map((slide) => (
        <SplideSlide key={slide.id}>
          <div className="w-full h-[800px] relative overflow-hidden mb-10">
            <img
              src={slide.image}
              alt="slider image"
              className="w-[100%] h-[100%] object-cover object-center"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default HeroCarousel;
