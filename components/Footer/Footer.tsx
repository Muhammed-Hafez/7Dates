import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className="mb-5">
          <p className="text-lg text-center text-white">
            Seven Dates Factory Packing and Processing Dates LLC © 2024
          </p>
        </div>

        <ul className="flex items-center justify-center gap-3">
          <li>
            <Link href="/">
              <FaFacebook size={25} color={"#fff"} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaInstagram size={25} color={"#fff"} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsTwitterX size={25} color={"#fff"} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
