"use client";

import "@splidejs/react-splide/css/core";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./Products.module.scss";

const productList = [
  {
    _id: 1,
    title: "Majdoul",
    desc: "Majdoul is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/majdoul.jpg",
    price: 10,
  },
  {
    _id: 2,
    title: "Ajwa",
    desc: "Ajwa is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/ajwa.jpg",
    price: 10,
  },
  {
    _id: 3,
    title: "Sukkary",
    desc: "Sukkary is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/sukkary.jpg",
    price: 10,
  },
  {
    _id: 4,
    title: "Safawi",
    desc: "Safawi is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/safawi.jpg",
    price: 10,
  },
  {
    _id: 5,
    title: "Mabroom",
    desc: "Mabroom is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/mabroom.jpg",
    price: 10,
  },
  {
    _id: 6,
    title: "Sagai",
    desc: "Sagai is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/sajai.jpg",
    price: 10,
  },
];

const Products = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto py-8 flex flex-col items-center justify-center">
      <div className={styles.products__heading}>
        <p className={styles.products__subtitle}>Our Products</p>
        <h1 className={styles.products__title}>Best Quality Products</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((product) => (
          <ProductCard
            key={product._id}
            img={product.img}
            title={product.title}
            desc={product.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
