"use client";

import "@splidejs/react-splide/css/core";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import styles from "./Hero.module.scss";

const sliderImages = [
  {
    id: 1,
    image: "/images/slider-images/1.jpg",
    quote:
      "“Savor the sweetness of life with 7Dates where every bite is a journey into the heart of tradition.”",
  },
  {
    id: 2,
    image: "/images/slider-images/003.jpg",
    quote:
      "“Empower your brand with the richness of 7Dates where tradition meets innovation, and quality becomes an enduring partnership.”",
  },
  {
    id: 3,
    image: "/images/slider-images/002.jpg",
    quote:
      "“Journey through the oasis of flavor 7Dates, where the authenticity of tradition meets the innovation of excellence.”",
  },
];

function Hero() {
  return (
    <section>
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
              <img src={slide.image} alt="slider image" />
              <div className={styles.overlay}></div>
              <div className={styles.hero__quote}>
                <h3>{slide.quote}</h3>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default Hero;
