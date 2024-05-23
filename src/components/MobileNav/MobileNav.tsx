"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useI18n } from "../../utils/translate";
import styles from "./MobileNav.module.scss";
import { IoMdClose } from "react-icons/io";

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  const { t } = useI18n();
  const { locale } = useParams();
  const router = useRouter();

  const navLinks = [
    { id: "1", name: "Home", path: `${locale === "en" ? "/" : `/${locale}`}` },
    {
      id: "2",
      name: "About",
      path: `${locale === "en" ? "/about" : `/${locale}/about`}`,
    },
    {
      id: "3",
      name: "Products",
      path: `${locale === "en" ? "/products" : `/${locale}/products`}`,
    },
    {
      id: "4",
      name: "Private Label",
      path: `${
        locale === "en" ? "/private-label" : `/${locale}/private-label`
      }`,
    },
    {
      id: "5",
      name: "Gift Box",
      path: `${locale === "en" ? "/gift-box" : `/${locale}/gift-box`}`,
    },
    {
      id: "6",
      name: "Contact",
      path: `${locale === "en" ? "/contact" : `/${locale}/contact`}`,
    },
    {
      id: "7",
      name: "Factory",
      path: `${locale === "en" ? "/new" : `/${locale}/new`}`,
    },
  ];

  // useState to store the current language
  const [language, setLanguage] = useState(locale || "en");

  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);

    const newPath = pathname.replace(`/${language}`, `/${newLanguage}`);
    router.push(newPath);

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
