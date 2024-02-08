"use client";

import Clients from "../../../components/Clients/Clients";
import ContactInfo from "../../../components/ContactInfo/ContactInfo";

import { useI18n } from "../../../utils/translate";

import styles from "../../../styles/AboutPage.module.scss";

const AboutPage = () => {
  const { t } = useI18n();

  return (
    <>
      <section className={styles.about}></section>

      <div className={styles.about__container}>
        <section className={styles.about__content}>
          <h1>{t("About Us")}</h1>
          <p>{t("The success history of 7Dates in 18 years")}</p>
        </section>

        <section className={styles.about__story}>
          <div className={styles.story__content}>
            <h2>{t("Our Story")}</h2>
            <p>
              {t(
                "With a legacy spanning over 18 years, 7Dates Factory Packing and Processing Dates LLC has been a pioneer in sourcing and packing the finest date products. Our journey is rooted in a dedication to quality, customer satisfaction, and a passion for delivering the best of the UAE's date varieties."
              )}
            </p>
          </div>

          <div className={styles.story__img}>
            <img src="/images/products/Saudi.jpg" alt="About" />
          </div>
        </section>

        <section className={styles.about__vision}>
          <div className={styles.vision__content}>
            <h2>{t("Vision")}</h2>
            <p>
              {t(
                "At 7Dates, our vision is to be the leading provider of high-quality date products globally, ensuring convenience, excellence, and a touch of tradition in every date."
              )}
            </p>
          </div>

          <div className={styles.vision__img}>
            <img src="/images/products/Safawy.jpg" alt="About" />
          </div>
        </section>

        <section className={styles.about__mission}>
          <div className={styles.mission__content}>
            <h2>{t("Mission")}</h2>
            <p>
              {t(
                "Our mission is to deliver the finest dates to UAE nationals, residents, and the global community, leveraging our 18 years of experience, cutting-edge technology, and a commitment to customer satisfaction."
              )}
            </p>
          </div>

          <div className={styles.mission__img}>
            <img src="/images/products/Ajwa.jpg" alt="About" />
          </div>
        </section>
      </div>

      <Clients />
      <ContactInfo />
    </>
  );
};

export default AboutPage;
