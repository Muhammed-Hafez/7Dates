import React from "react";

import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  img: string;
  title: string;
}

export default function ProductCard({ img, title }: ProductCardProps) {
  return (
    <div className={styles.product__card__container}>
      <div className={styles.product__card}>
        <div className={styles.product__img}>
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className={styles.product__details}>
          <h3 className={styles.product__name}>{title}</h3>
        </div>
      </div>
    </div>
  );
}
