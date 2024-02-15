"use client";

import { useParams } from "next/navigation";
import { GoCheckCircleFill } from "react-icons/go";
import { useI18n } from "../../utils/translate";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./Benefits.module.scss";

const Benefits = () => {
  const { t } = useI18n();
  const { locale } = useParams();

  return (
    <section className={styles.benefits}>
      <div className={styles.benefits__container}>
        <div className={`${styles.benefits__content}`}>
          <h2 className={styles.benefits__title}>
            {t("Customize your order NOW!")}
          </h2>
          <p className={styles.benefits__desc}>
            {t(
              "Packed with essential nutrients, aiding digestion, and providing a natural energy boost, these tiny wonders are a must-have for a healthy diet."
            )}
          </p>

          <div className={styles.benefits__listContainer}>
            <ul className={styles.benefits__list}>
              <li>
                <GoCheckCircleFill size={35} color={"var(--light-color)"} />
                {t("Rich in Nutrients")}
              </li>
              <li>
                <GoCheckCircleFill size={35} color={"var(--light-color)"} />
                {t("Natural Energy Boost")}
              </li>
            </ul>

            <ul className={styles.benefits__list}>
              <li>
                <GoCheckCircleFill size={35} color={"var(--light-color)"} />
                {t("High in Fiber")}
              </li>
              <li>
                <GoCheckCircleFill size={35} color={"var(--light-color)"} />
                {t("Heart Health Support")}
              </li>
            </ul>
          </div>

          <CustomLink url={`/${locale}/gift-box`}>
            {t("Explore More")}
          </CustomLink>
        </div>

        <div className={`${styles.benefits__video}`}>
          <img src="/videos/7dates.gif" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
