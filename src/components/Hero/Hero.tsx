"use client";

import { useParams } from "next/navigation";

import "@splidejs/react-splide/css/core";
import "@splidejs/splide/dist/css/splide.min.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { useI18n } from "../../utils/translate";

import styles from "./Hero.module.scss";

function Hero() {
  const { t } = useI18n();
  const { locale } = useParams();

  const sliderImages = [
    {
      id: 1,
      image: "/images/slider-images/001.jpg",
      quote: t(
        "“Savor the sweetness of life with 7Dates where every bite is a journey into the heart of tradition.”"
      ),
    },
    {
      id: 2,
      image: "/images/slider-images/003.jpg",
      quote: t(
        "“Empower your brand with the richness of 7Dates where tradition meets innovation, and quality becomes an enduring partnership.”"
      ),
    },
    {
      id: 3,
      image: "/images/slider-images/002.jpg",
      quote: t(
        "“Journey through the oasis of flavor 7Dates, where the authenticity of tradition meets the innovation of excellence.”"
      ),
    },
    // {
    //   id: 4,
    //   image: "/images/slider-images/004.jpg",
    //   quote:
    //     "“Journey through the oasis of flavor 7Dates, where the authenticity of tradition meets the innovation of excellence.”",
    // },
    // {
    //   id: 5,
    //   image: "/images/slider-images/005.jpg",
    //   quote:
    //     "“Journey through the oasis of flavor 7Dates, where the authenticity of tradition meets the innovation of excellence.”",
    // },
    // {
    //   id: 6,
    //   image: "/images/slider-images/006.jpg",
    //   quote:
    //     "“Journey through the oasis of flavor 7Dates, where the authenticity of tradition meets the innovation of excellence.”",
    // },
  ];

  return (
    <section>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          pagination: true,
          arrows: true,
          direction: `${locale === "ar" ? "rtl" : "ltr"}`,
          interval: 4000,
          prevArrow: (arrow: HTMLElement) => {
            arrow.classList.add("splide__arrow", "splide__arrow--prev");
            return <FaArrowLeftLong />;
          },
          nextArrow: (arrow: HTMLElement) => {
            arrow.classList.add("splide__arrow", "splide__arrow--next");
            return <FaArrowRightLong />;
          },
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
