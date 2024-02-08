"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { useI18n } from "../../utils/translate";

import styles from "./MobileNav.module.scss";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "About", path: "/about" },
  { id: "3", name: "Products", path: "/products" },
  { id: "4", name: "Private Label", path: "/private-label" },
  { id: "5", name: "Gift Box", path: "/gift-box" },
  { id: "6", name: "Contact", path: "/contact" },
];

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  const { t } = useI18n();
  const { locale } = useParams();
  const router = useRouter();

  // useState to store the current language
  const [language, setLanguage] = useState(locale || "en");

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    router.push(`/${newLanguage}`);

    onClose();
  };

  // Update lang state when locale changes
  useEffect(() => {
    setLanguage(locale || "en");
  }, [locale]);

  return (
    <nav>
      <div className={styles.mobile__links}>
        <div className={styles.mobile__nav__links}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={styles.mobile__nav__link}
              onClick={onClose}
            >
              {t(link.name).toUpperCase()}
            </Link>
          ))}
        </div>

        <div className={styles.close__icon} onClick={onClose}>
          <IoMdClose size={35} />
        </div>

        <button onClick={handleLanguageChange} className={styles.change__lang}>
          {language === "en" ? "عــربـي" : "English"}
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
