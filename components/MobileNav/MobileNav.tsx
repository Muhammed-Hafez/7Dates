import { useState } from "react";
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

export default function MobileNav() {
  const [showMobileNav, setShowMobileNav] = useState(true); // Set the default value to true

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav>
      {showMobileNav && (
        <div className={styles.mobile__links}>
          <div className={styles.mobile__nav__links}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={styles.mobile__nav__link}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          <div className={styles.close__icon} onClick={toggleMobileNav}>
            <IoMdClose size={35} />
          </div>
        </div>
      )}
    </nav>
  );
}
