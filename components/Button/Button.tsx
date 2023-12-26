import Link from "next/link";

import styles from "./Button.module.scss";

interface ButtonProps {
  title: string;
  url: string;
}
export default function Button({ title, url }: ButtonProps) {
  return (
    <Link href={url} className={styles.button}>
      {title}
    </Link>
  );
}
