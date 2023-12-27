"use client";

import "@splidejs/react-splide/css/core";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./Products.module.scss";

const productList = [
  {
    _id: 1,
    title: "SAUDI",
    desc: "Majdoul is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/1.webp",
    price: 10,
  },
  {
    _id: 2,
    title: "SAGEY",
    desc: "Ajwa is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/3.webp",
    price: 10,
  },
  {
    _id: 3,
    title: "SAFAWY",
    desc: "Sukkary is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/5.webp",
    price: 10,
  },
  {
    _id: 4,
    title: "AJWA",
    desc: "Safawi is a soft, moist date with a sweet, delicate flavor. It is a popular date variety in Saudi Arabia and the United Arab Emirates.",
    img: "/images/products/7.webp",
    price: 10,
  },
];

const Products = () => {
  return (
    <section className=" bg-[#e0af7f25] my-8 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto py-5 flex flex-col items-center justify-center">
        <div className={styles.products__heading}>
          <p className={styles.products__subtitle}>Our Products</p>
          <h1 className={styles.products__title}>Best Quality Products</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
