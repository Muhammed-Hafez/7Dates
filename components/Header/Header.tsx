"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import MobileNav from "../MobileNav/MobileNav";

const navLinks = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "About", path: "/about" },
  { id: "3", name: "Products", path: "/products" },
  { id: "4", name: "Private Label", path: "/private-label" },
  { id: "5", name: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);

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

  return (
    <header
      className={`${styles.header} ${scrollY > 250 ? styles.scrolled : ""}`}
    >
      {/* && !showMobileNav */}
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          <Image
            src="/images/logo-v3.png"
            alt="Seven Dates"
            width={250}
            height={250}
            className={styles.header__logo__img}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`${styles.header__navbar} ${styles.desktop__nav}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={styles.header__link}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className={styles.mobile__nav} onClick={toggleMobileNav}>
          <MdMenu size={40} />
        </div>
      </div>

      {showMobileNav && <MobileNav />}
    </header>
  );
}
