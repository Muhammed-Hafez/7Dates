"use client";

import "@splidejs/react-splide/css/core";
import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import styles from "./Hero.module.scss";

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
    <section className="w-full h-[800px] mx-auto relative overflow-hidden">
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
            <div className={styles.img__container}>
              <img
                src={slide.image}
                alt="slider image"
                className="w-[100%] h-[100%] object-cover object-bottom"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default HeroCarousel;
