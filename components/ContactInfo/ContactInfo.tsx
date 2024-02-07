"use client";

import { useParams } from "next/navigation";

import { useI18n } from "@/utils/translate";

import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import styles from "./ContactInfo.module.scss";

const ContactInfo = () => {
  const { t } = useI18n();
  const { locale } = useParams();

  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <p className={styles.contact__subtitle}>{t("Contact Us")}</p>
        <h2 className={styles.contact__title}>{t("Get in touch with us.")}</h2>

        <ul className={styles.contact__list}>
          <li>
            <FaLocationDot className={styles.contact__icon} />
            Umm Al Quwain <br /> United Arab Emirates
          </li>
          <li>
            <FaPhone className={styles.contact__icon} />
            +91 1234567890
          </li>
          <li>
            <IoMdMail className={styles.contact__icon} />
            info@sevendatesfactory.com
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactInfo;
