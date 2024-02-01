"use client";

import React from "react";
import styles from "./MobileNav.module.scss";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

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
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className={styles.close__icon} onClick={onClose}>
          <IoMdClose size={35} />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
