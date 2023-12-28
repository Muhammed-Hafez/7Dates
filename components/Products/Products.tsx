"use client";

import "@splidejs/react-splide/css/core";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./Products.module.scss";

const productList = [
  {
    _id: 1,
    title: "SAUDI",
    desc: "Majdoul is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/Saudi.jpg",
    price: 10,
  },
  {
    _id: 2,
    title: "SAGEY",
    desc: "Ajwa is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/Sagey.jpg",
    price: 10,
  },
  {
    _id: 3,
    title: "SAFAWY",
    desc: "Sukkary is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/Safawy.jpg",
    price: 10,
  },
  {
    _id: 4,
    title: "AJWA",
    desc: "Safawi is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/Ajwa.jpg",
    price: 10,
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
              desc={product.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
