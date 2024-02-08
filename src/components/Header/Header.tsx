"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter, usePathname } from "next/navigation";

import { MdMenu } from "react-icons/md";

import { useI18n } from "../../utils/translate";

import MobileNav from "../MobileNav/MobileNav";

import styles from "./Header.module.scss";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const { t } = useI18n();
  const { locale } = useParams();

  // useState to store the current language
  const [language, setLanguage] = useState(locale || "en");

  const navLinks = [
    { id: "1", name: "Home", path: `${locale ? `/${locale}` : "/"}` },
    {
      id: "2",
      name: "About",
      path: `${locale ? `/${locale}/about` : "/about"}`,
    },
    {
      id: "3",
      name: "Products",
      path: `${locale ? `/${locale}/products` : "/products"}`,
    },
    {
      id: "4",
      name: "Private Label",
      path: `${locale ? `/${locale}/private-label` : "/private-label"}`,
    },
    {
      id: "5",
      name: "Gift Box",
      path: `${locale ? `/${locale}/gift-box` : "/gift-box"}`,
    },
    {
      id: "6",
      name: "Contact",
      path: `${locale ? `/${locale}/contact` : "/contact"}`,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);

    // Change Language and stay on the same page
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${language}`, `/${newLanguage}`);
    window.history.pushState({}, "", newPath);

    router.push(newPath);

    toggleMobileNav();
  };

  // Update lang state when locale changes
  useEffect(() => {
    setLanguage(locale || "en");
  }, [locale]);

  const renderNavLinks = () => {
    return navLinks.map((link) => (
      <Link key={link.name} href={link.path} className={styles.header__link}>
        {t(link.name).toUpperCase()}
      </Link>
    ));
  };

  return (
    <header
      className={`${styles.header} ${scrollY > 250 ? styles.scrolled : ""}`}
    >
      <div className={styles.header__container}>
        <Link
          href="/"
          className={`${styles.header__logo} ${
            locale === "en" ? styles.ltr : styles.rtl
          }`}
        >
          <img
            src="/images/7dates-logo.png"
            alt="7Dates"
            className={styles.header__logo__img}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`${styles.header__navbar} ${styles.desktop__nav}`}>
          {renderNavLinks()}

          <button
            onClick={handleLanguageChange}
            className={styles.change__lang}
          >
            {language === "en" ? "عــربـي" : "English"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <button className={styles.mobile__nav} onClick={toggleMobileNav}>
          <MdMenu size={40} />
        </button>
      </div>

      {showMobileNav && <MobileNav onClose={toggleMobileNav} />}
    </header>
  );
};

export default Header;
