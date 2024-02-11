"use client";

import { useI18n } from "../../../utils/translate";

import CustomLink from "../../../components/CustomLink/CustomLink";

import styles from "../../../styles/ContactPage.module.scss";

const ContactPage = () => {
  const { t } = useI18n();

  return (
    <section className={styles.contact}>
      <section className={styles.contact__banner}></section>

      <div className={styles.contact__container}>
        <div className={styles.contact__heading}>
          <h1 className={styles.contact__title}>{t("Contact Us")}</h1>
        </div>

        <div className={styles.contact__form}>
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={`${t("Your name")}`}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder={`${t("Your email")}`}
            />

            <textarea
              name="message"
              id="message"
              placeholder={`${t("Your message")}`}
            ></textarea>
            <div className={styles.submit}>
              <CustomLink url="#">{t("Send")}</CustomLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
