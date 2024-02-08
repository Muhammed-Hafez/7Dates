"use client";

import { useI18n } from "../../../utils/translate";

import styles from "../../../styles/GiftBox.module.scss";

export default function GiftBox() {
  const { t } = useI18n();

  return (
    <>
      <header className={styles.gift}></header>
      <section className={styles.gift__container}>
        <div className={styles.gift__content}>
          <h2>{t("Welcome to 7Dates, where gifting becomes an art.")}</h2>
          <p>
            {t(
              "Customize your box with the freshest, juiciest dates for a unique experience. We help you select from a variety of premium dates, creating a personalized gift that speaks volumes."
            )}
            <br /> <br />
            {t(
              "From sweet classics to exotic rarities, craft a box tailored to your loved ones' tastes. Share the joy of giving with a thoughtful touch from 7Dates, turning every occasion into a sweet and memorable celebration."
            )}
            <br /> <br />
            {t(
              "Because each date deserves its moment, and every moment deserves the perfect, customized gift"
            )}
          </p>
        </div>

        <div className={styles.gift__img}>
          <img src="/images/gift-box.png" alt="" />
        </div>
      </section>
    </>
  );
}
