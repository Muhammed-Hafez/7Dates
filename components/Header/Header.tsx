"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const navLinks = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "About", path: "/about" },
  { id: "3", name: "Products", path: "/products" },
  { id: "4", name: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${scrollY > 200 ? styles.scrolled : ""}`}
    >
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          <Image
            src="/images/logo.png"
            alt="Seven Dates"
            width={120}
            height={120}
          />
        </Link>

        <nav className={styles.header__navbar}>
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
      </div>
    </header>
  );
}
