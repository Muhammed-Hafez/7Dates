"use client";

import "@splidejs/react-splide/css/core";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./Products.module.scss";

const productList = [
  {
    _id: 1,
    title: "AJWA",
    desc: "Majdoul is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/Ajwa.png",
    url: "1",
  },
  {
    _id: 2,
    title: "SAFAWY",
    desc: "Sukkary is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/Safawy.png",
    url: "2",
  },
  {
    _id: 3,
    title: "SAGEY",
    desc: "Ajwa is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/Sagey.png",
    url: "3",
  },
  {
    _id: 4,
    title: "SAUDI",
    desc: "Saudi is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/Saudi.png",
    url: "4",
  },
];

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.products__container}>
        <div className={styles.products__heading}>
          <p className={styles.products__subtitle}>Our Products</p>
          <h1 className={styles.products__title}>Best Quality Products</h1>
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
