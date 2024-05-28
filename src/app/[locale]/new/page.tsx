"use client";
import React, { useEffect, useRef } from "react";

import Clients from "../../../components/Clients/Clients";

import ContactInfo from "../../../components/ContactInfo/ContactInfo";

import { useI18n } from "../../../utils/translate";

import styles from "../../../styles/New.module.scss";

const AboutPage = () => {
  const { t } = useI18n();
  const videoSectionRef = useRef<HTMLDivElement>(null);
  // const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoSectionRef.current) {
  //     videoSectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   }

  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, []);

  return (
    <>
      <section className={styles.about}></section>

      <div ref={videoSectionRef} className={styles.about__container}>
        <section className={styles.about__content}>
          <h1>
            {t("Welcome to Seven Dates Factory Packing and processing Dates")}
            <br />
            {t(" Your State-of-the-Art Dates Factory !")}
          </h1>
          <p>
            {t(
              "At Seven Dates Factory, we pride ourselves on being at the forefront of dates production, bringing you the finest quality dates through innovation, technology, and a commitment to excellence. Our state-of-the-art dates factory is a testament to our dedication to delivering superior products to our customers worldwide."
            )}
          </p>
          <video className={styles.FactoryVideo} controls loop autoPlay>
            <source src="/images/Factory/7Dates.mp4" />
          </video>
        </section>

        <section className={styles.about__story}>
          <div className={styles.story__content}>
            <h2>{t("Cutting-Edge Technology")}</h2>
            <p>
              {t(
                "Our factory is equipped with the latest advancements in dates processing technology. From sorting and grading to packaging, every step of our production process is meticulously optimized for efficiency and quality assurance. With automated systems and precision machinery, we ensure that each date meets our rigorous standards before it reaches your table."
              )}
            </p>
          </div>

          <div className={styles.story__img}>
            <img src="/images/Factory/IMG_0803.JPG" alt="About" />
          </div>
        </section>

        <section className={styles.about__vision}>
          <div className={styles.vision__content}>
            <h2>{t("Sustainable Practices Quality Assurance")}</h2>
            <p>
              {t(
                "Quality is our top priority. That's why we implement stringent quality control measures at every stage of production. From sourcing the finest dates to final packaging, our team of experts ensures that only the best dates make it to market. We adhere to international food safety standards, providing you with peace of mind knowing that you're enjoying."
              )}
            </p>
          </div>

          <div className={styles.vision__img}>
            <img src="/images/Factory/IMG_0706.JPG" alt="About" />
          </div>
        </section>

        <section className={styles.about__mission}>
          <div className={styles.mission__content}>
            <h2>{t("Innovation and Research")}</h2>
            <p>
              {t(
                "Continuous improvement drives us forward. Our dedicated research and development team is constantly exploring new techniques and technologies to enhance our dates production process. By staying ahead of the curve, we ensure that our customers always receive the best dates available."
              )}
            </p>
          </div>

          <div className={styles.mission__img}>
            <img src="/images/Factory/factory.jpg" alt="About" />
          </div>
        </section>

        <section className={styles.about__vision}>
          <div className={styles.vision__content}>
            <h2>{t("Experience the Excellence")}</h2>
            <p>
              {t(
                "Join us on a journey of taste and quality. Explore our range of premium dates and experience the difference that our state-of-the-art factory makes. At Seven Dates Factory, excellence is not just a goal—it's our standard."
              )}
            </p>
          </div>

          <div className={styles.end__img}>
            <img src="/images/Factory/IMG_0824.JPG" alt="About" />
          </div>
        </section>

        <section className={styles.about__end}>
          <p>
            {t(
              "Thank you for choosing Seven Dates Factory where quality meets innovation in every bite."
            )}
          </p>
        </section>
      </div>

      <ContactInfo />
    </>
  );
};

export default AboutPage;
