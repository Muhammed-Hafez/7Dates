import React from "react";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div
        className={`${styles.about__container} w-full max-w-[1400px] mx-auto py-8 flex flex-col-reverse lg:flex-row items-center justify-evenly lg:gap-8`}
      >
        <div
          className={`${styles.about__img} lg:w-1/3 flex items-center justify-center overflow-hidden`}
        >
          <img
            src="/images/about.jpg"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={`${styles.about__content} lg:w-2/3 text-center lg:text-left mb-8 md:mb-0`}
        >
          <p className={styles.about__subtitle}>About Us</p>
          <h1
            className={`${styles.about__title} text-3xl lg:text-4xl font-bold mb-4`}
          >
            The success history of <br /> 7Dates in 18 years
          </h1>
          <p className={styles.about__desc}>
            With a legacy spanning over 18 years, Seven Dates Factory Packing
            and Processing Dates LLC has been a pioneer in sourcing and packing
            the finest date products.
          </p>
          <p className={styles.about__desc}>
            Our journey is rooted in a dedication to quality, customer
            satisfaction, and a passion for delivering the best of the UAE's
            date varieties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
