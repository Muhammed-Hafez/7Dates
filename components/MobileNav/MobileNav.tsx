"use client";

import React, { useState } from "react";
import styles from "./MobileNav.module.scss";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const navLinks = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "About", path: "/about" },
  { id: "3", name: "Products", path: "/products" },
  { id: "4", name: "Private Label", path: "/private-label" },
  { id: "5", name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(true);

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  const handleLinkClick = () => {
    closeMobileNav();
  };

  const toggleMobileNav = () => {
    setShowMobileNav((prevShowMobileNav) => !prevShowMobileNav);
  };

  const renderNavLinks = () => {
    return navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.path}
        className={styles.mobile__nav__link}
        onClick={handleLinkClick}
      >
        {link.name.toUpperCase()}
      </Link>
    ));
  };

  return (
    <nav>
      {showMobileNav && (
        <div className={styles.mobile__links}>
          <div className={styles.mobile__nav__links}>{renderNavLinks()}</div>

          <div className={styles.close__icon} onClick={toggleMobileNav}>
            <IoMdClose size={35} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
