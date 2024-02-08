"use client";

import { useParams } from "next/navigation";

import "@splidejs/react-splide/css/core";

import { useI18n } from "../../utils/translate";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./Products.module.scss";

const Products = () => {
  const { t } = useI18n();
  const { locale } = useParams();

  const productList = [
    {
      _id: 1,
      title: t("AJWA"),
      img: "/images/products/Ajwa.jpg",
      url: "1",
    },
    {
      _id: 2,
      title: t("SAFAWY"),
      img: "/images/products/Safawy.jpg",
      url: "2",
    },
    {
      _id: 3,
      title: t("SAGEY"),
      img: "/images/products/Sagey.jpg",
      url: "3",
    },
    {
      _id: 4,
      title: t("SAUDI"),
      img: "/images/products/Saudi.jpg",
      url: "4",
    },
    {
      _id: 5,
      title: t("MAJDOUL"),
      img: "/images/products/Majdoul.jpg",
      url: "5",
    },
    {
      _id: 6,
      title: t("SUKKARY"),
      img: "/images/products/Sukkary.jpg",
      url: "6",
    },
    {
      _id: 7,
      title: t("MABROOM"),
      img: "/images/products/Mabroom.jpg",
      url: "7",
    },
  ];

  return (
    <section className={styles.products}>
      <div className={styles.products__container}>
        <div className={styles.products__heading}>
          <p className={styles.products__subtitle}>{t("Our Products")}</p>
          <h1 className={styles.products__title}>
            {t("Best Quality Products")}
          </h1>
        </div>

        <div className={styles.products__list}>
          {productList.map((product) => (
            <ProductCard
              key={product._id}
              img={product.img}
              title={product.title}
              url={product.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
