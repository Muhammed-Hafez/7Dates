"use client";

import { useParams } from "next/navigation";

import { useI18n } from "../../utils/translate";

import CustomLink from "../CustomLink/CustomLink";

import styles from "./About.module.scss";

const About = () => {
  const { t } = useI18n();
  const { locale } = useParams();

  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__images}>
          <div className={styles.left__images}>
            <img src="/images/about/about-2.jpg" alt="" />
            <img src="/images/about/about-1.jpg" alt="" />
          </div>
          <div className={styles.right__images}>
            <img src="/images/about/about-3.jpeg" alt="" />
            <img src="/images/about/about-4.jpg" alt="" />
          </div>
        </div>

        <div className={styles.about__content}>
          <p className={styles.about__subtitle}>{t("About Us")}</p>
          <h1 className={styles.about__title}>
            {t("The success history of")} <br /> {t("7Dates in 18 years")}
          </h1>

          <p className={styles.about__desc}>
            {t(
              "We have more than 18 years of experience in sourcing and packing the finest dates products."
            )}
          </p>

          <p
            className={styles.about__desc}
            style={{
              marginBottom: "2rem",
            }}
          >
            {t(
              "7Dates principal goal is to provide the highest quality dates products to UAE nationals, residents, the Gulf Countries and whole world."
            )}
          </p>
          <CustomLink url={`/${locale}/about`}>{t("Read More")}</CustomLink>
        </div>
      </div>
    </section>
  );
};

export default About;
