import Link from "next/link";
import styles from "./CustomLink.module.scss";

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

export default function CustomLink({ url, children }: LinkProps) {
  return (
    <Link href={url} className={styles.button}>
      {children}
    </Link>
  );
}
