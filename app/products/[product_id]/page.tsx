"use client";

import { useParams } from "next/navigation";

import styles from "../../../styles/ProductDetailsPage.module.scss";

const products = [
  {
    id: "1",
    imgUrl: "/images/products/Ajwa.png",
    name: "Ajwa",
    desc: "Lorem Ipsum for Ajwa",
  },
  {
    id: "2",
    imgUrl: "/images/products/Safawy.png",
    name: "Safawy",
    desc: "Lorem Ipsum for Safawy",
  },
  {
    id: "3",
    imgUrl: "/images/products/Sagey.png",
    name: "Sagey",
    desc: "Lorem Ipsum for Sagey",
  },
  {
    id: "4",
    imgUrl: "/images/products/Saudi.png",
    name: "Saudi",
    desc: "Lorem Ipsum for Saudi",
  },
];

export default function ProductDetails() {
  const params = useParams<{ product_id: string }>();

  console.log(products);
  console.log(params);

  const selectedProduct = products.find(
    (product) => product.id === params.product_id
  );

  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  const { id, imgUrl, name, desc } = selectedProduct;

  return (
    <section className={styles.product__details}>
      <div className={styles.product__details__container}>
        <div className={styles.product__img}>
          <img src={imgUrl} alt="Product Image" />
        </div>

        <div className={styles.product__content}>
          <h2>{name}</h2>
          <p>{desc}</p>
          <p>{desc}</p>
          <p>{desc}</p>
          <p>{desc}</p>
          <p>{desc}</p>
          <p>{desc}</p>
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
}
