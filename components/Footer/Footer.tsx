import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className="bg-[#e0af7f30]">
      <div className="w-full max-w-[1400px] mx-auto py-8 overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-5">
            <p className="text-sm font-semibold tracking-wider text-center">
              Seven Dates Factory Packing and Processing Dates LLC © 2024
            </p>
          </div>

          <ul className="flex items-center justify-center gap-3">
            <li>
              <Link href="/">
                <FaFacebook size={25} color={"#e0b07f"} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaInstagram size={25} color={"#e0b07f"} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsTwitterX size={25} color={"#e0b07f"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
