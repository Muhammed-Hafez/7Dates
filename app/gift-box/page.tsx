import React from "react";

import styles from "../../styles/GiftBox.module.scss";

export default function GiftBox() {
  return (
    <>
      <header className={styles.gift}></header>
      <section className={styles.gift__container}>
        <div className={styles.gift__content}>
          <h2>Welcome to 7 Dates, where gifting becomes an art.</h2>
          <p>
            Customize your box with the freshest, juiciest dates for a unique
            experience. <br /> We help you select from a variety of premium
            dates, creating a personalized gift that speaks volumes. <br /> From
            sweet classics to exotic rarities, craft a box tailored to your
            loved ones' tastes. <br /> Share the joy of giving with a thoughtful
            touch from 7 Dates, turning every occasion into a sweet and
            memorable celebration. <br /> Because each date deserves its moment,
            and every moment deserves the perfect, customized gift
          </p>
        </div>

        <div className={styles.gift__img}>
          <img src="/images/gift-box.png" alt="" />
        </div>
      </section>
    </>
  );
}
