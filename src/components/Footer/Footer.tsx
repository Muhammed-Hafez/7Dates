"use client";

import Link from "next/link";

import { useI18n } from "../../utils/translate";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import styles from "./Footer.module.scss";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.copyright}>
          {t("7Dates Factory Packing and Processing Dates LLC © 2024")}
        </p>

        <ul className={styles.social__icons}>
          <li>
            <Link href="/">
              <FaFacebook size={25} color={"var(--light-color)"} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaInstagram size={25} color={"var(--light-color)"} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsTwitterX size={25} color={"var(--light-color)"} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
