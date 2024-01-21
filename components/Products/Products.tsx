"use client";

import "@splidejs/react-splide/css/core";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./Products.module.scss";

const productList = [
  {
    _id: 1,
    title: "Ajwa",
    img: "/images/products/Ajwa.jpg",
    url: "1",
  },
  {
    _id: 2,
    title: "Safawy",
    img: "/images/products/Safawy.jpg",
    url: "2",
  },
  {
    _id: 3,
    title: "Sagey",
    img: "/images/products/Sagey.jpg",
    url: "3",
  },
  {
    _id: 4,
    title: "Saudi",
    img: "/images/products/Saudi.jpg",
    url: "4",
  },
  {
    _id: 5,
    title: "Majdoul",
    img: "/images/products/Majdoul.jpg",
    url: "5",
  },
  {
    _id: 6,
    title: "Sukkary",
    img: "/images/products/Sukkary.jpg",
    url: "6",
  },
  {
    _id: 7,
    title: "Mabroom",
    img: "/images/products/Mabroom.jpg",
    url: "7",
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
