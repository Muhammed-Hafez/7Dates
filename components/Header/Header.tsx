"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { MdMenu } from "react-icons/md";

import { useI18n } from "@/utils/translate";

import MobileNav from "../MobileNav/MobileNav";

import styles from "./Header.module.scss";

const navLinks = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "About", path: "/about" },
  { id: "3", name: "Products", path: "/products" },
  { id: "4", name: "Private Label", path: "/private-label" },
  { id: "5", name: "Gift Box", path: "/gift-box" },
  { id: "6", name: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const { t } = useI18n();
  const { locale } = useParams();

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
        <Link href="/" className={styles.header__logo}>
          <img
            src="/images/logo-v3.png"
            alt="7Dates"
            className={styles.header__logo__img}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`${styles.header__navbar} ${styles.desktop__nav}`}>
          {renderNavLinks()}
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
