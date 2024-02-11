import styles from "./ProductCard.module.scss";
import Link from "next/link";

interface ProductCardProps {
  img: string;
  title: string;
  url: string;
}

export default function ProductCard({ img, title, url }: ProductCardProps) {
  return (
    <Link className={styles.product__card__container} href={url}>
      <div className={styles.product__card}>
        <div className={styles.product__img}>
          <img src={img} alt={title} />
        </div>

        <div className={styles.product__details}>
          <h3 className={styles.product__name}>{title}</h3>
        </div>
      </div>
    </Link>
  );
}
