"use client";

import { useParams } from "next/navigation";

import { useI18n } from "../../utils/translate";

import Button from "../Button/Button";
import styles from "./PrivateLabel.module.scss";

export default function PrivateLabel() {
  const { t } = useI18n();
  const { locale } = useParams();

  return (
    <section className={styles.private}>
      <div className={styles.private__container}>
        <div className={styles.private__img}>
          <img src="/images/private-img.png" alt="" />
        </div>

        <div className={styles.private__content}>
          <h1 className={styles.private__title}>{t("Private Label")}</h1>
          <p className={styles.private__desc}>
            {t(
              "We offer convenience, quality and flexibility 7Dates Factory Packing and Processing Dates LLC - a local based Dates manufacturing company in United Arab Emirates."
            )}
          </p>

          <p
            className={styles.private__desc}
            style={{
              marginBottom: "2rem",
            }}
          >
            {t(
              "7Dates principal goal is to provide the highest quality dates products to UAE nationals, residents, the Gulf Countries and whole world."
            )}
          </p>

          <Button url="/private-label">{t("Learn More")}</Button>
        </div>
      </div>
    </section>
  );
}
