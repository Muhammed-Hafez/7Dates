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
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          <Image
            src="/images/logo.png"
            alt="Seven Dates"
            width={180}
            height={180}
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
