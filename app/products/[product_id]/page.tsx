"use client";

import { useParams } from "next/navigation";

import styles from "../../../styles/ProductDetailsPage.module.scss";

const products = [
  {
    id: "1",
    imgUrl: "/images/products/Ajwa.png",
    name: "Ajwa",
    desc: `Ajwa dates, revered for their dark color and distinct taste, bring a unique blend of sweetness and earthiness to your palate. Known for their historical significance, Ajwa dates are said to possess exceptional health benefits. Enjoy the timeless elegance of Ajwa dates as you embrace both tradition and well-being.`,
  },
  {
    id: "2",
    imgUrl: "/images/products/Safawy.png",
    name: "Safawy",
    desc: `Safawi dates, with their dark color and intense sweetness, captivate the senses with every bite and bring along a plethora of health benefits. Highly prized for their distinctive taste, reminiscent of molasses and rich caramel, Safawi dates serve as a testament to the unparalleled quality and sophistication that Seven Dates embodies. Enjoy the exquisite flavor while reaping the health rewards of Safawi dates.`,
  },
  {
    id: "3",
    imgUrl: "/images/products/Sagey.png",
    name: "Sagey",
    desc: `Sagey dates, with their medium size and golden-brown color, boast a delightful combination of sweetness and chewiness. These dates are a favorite for their versatility, making them a perfect snack or ingredient for both sweet and savory dishes. `,
  },
  {
    id: "4",
    imgUrl: "/images/products/Saudi.png",
    name: "Saudi",
    desc: "Lorem Ipsum for Saudi",
  },
  {
    id: "5",
    imgUrl: "/images/products/Sagey.png",
    name: "Majdoul",
    desc: `Indulge in the regal experience of Majdoul dates plump which are golden, and irresistibly sweet. These dates are a true delicacy, known for their rich caramel-like flavor and soft, chewy texture. Majdoul dates are the epitome of luxury, offering a taste that lingers on the palate.
    they offer a multitude of health benefits. Renowned for their rich caramel-like flavor and delightful, soft, and chewy texture, Majdoul dates stand out as a true delicacy. Packed with essential nutrients, they contribute to overall well-being and represent the epitome of a luxurious and healthy treat.`,
  },
  {
    id: "6",
    imgUrl: "/images/products/Saudi.png",
    name: "Sukkary",
    desc: `Sukkary dates, the jewels of the date kingdom, are renowned for their amber hue and luscious, honey-like taste. Soft, with a melt-in-your-mouth consistency, Sukkary dates offer a delightful balance of sweetness and a hint of caramel. Sukkary dates not only delight the palate with their amber hue and honey-like taste but also offer health benefits.  Elevate your moments with the exquisite flavor of Sukkary.  `,
  },
  {
    id: "7",
    imgUrl: "/images/products/Ajwa.png",
    name: "Mabroom",
    desc: `Experience the natural sweetness of Mabroom dates, known for their elongated shape and rich, toffee-like flavor. Mabroom dates offer a satisfying chewiness and a nuanced taste that evolves with each bite. Enjoy the wholesome goodness and timeless charm of Mabroom dates.`,
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
      <section className={styles.product__banner}></section>
      <div className={styles.product__details__container}>
        <div className={styles.product__img}>
          <img src={imgUrl} alt="Product Image" />
        </div>

        <div className={styles.product__content}>
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
}
