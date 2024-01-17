import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  url: string;
  children: React.ReactNode;
}

export default function Button({ url, children }: ButtonProps) {
  return (
    <Link href={url} className={styles.button}>
      {children}
    </Link>
  );
}
