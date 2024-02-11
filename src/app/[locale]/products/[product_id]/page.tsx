"use client";

import { useParams } from "next/navigation";

import styles from "../../../../styles/ProductDetailsPage.module.scss";
import { useI18n } from "@/src/utils/translate";

export default function ProductDetails() {
  const { t } = useI18n();
  const { locale } = useParams();

  const products = [
    {
      id: "1",
      imgUrl: "/images/products/Ajwa.jpg",
      name: t("Ajwa"),
      desc: t(
        "Ajwa dates, revered for their dark color and distinct taste, bring a unique blend of sweetness and earthiness to your palate. Known for their historical significance, Ajwa dates are said to possess exceptional health benefits. Enjoy the timeless elegance of Ajwa dates as you embrace both tradition and well-being."
      ),
      banner: "/images/products-banners/Ajwa.jpg",
    },
    {
      id: "2",
      imgUrl: "/images/products/Safawy.jpg",
      name: t("Safawy"),
      desc: t(
        "Safawi dates, with their dark color and intense sweetness, captivate the senses with every bite and bring along a plethora of health benefits. Highly prized for their distinctive taste, reminiscent of molasses and rich caramel, Safawi dates serve as a testament to the unparalleled quality and sophistication that 7Dates embodies. Enjoy the exquisite flavor while reaping the health rewards of Safawi dates."
      ),
      banner: "/images/products-banners/Safawy.jpg",
    },
    {
      id: "3",
      imgUrl: "/images/products/Sagey.jpg",
      name: t("Sagey"),
      desc: t(
        "Sagey dates, with their medium size and golden-brown color, boast a delightful combination of sweetness and chewiness. These dates are a favorite for their versatility, making them a perfect snack or ingredient for both sweet and savory dishes."
      ),
      banner: "/images/products-banners/Sagey.jpg",
    },
    {
      id: "4",
      imgUrl: "/images/products/Saudi.jpg",
      name: t("Saudi"),
      desc: t(
        "Experience the essence of Saudi Arabia with our premium dates. Brimming with sun-soaked sweetness, each bite is a journey through centuries of heritage. Packed with nutrients, these wholesome treats offer a taste of KSA's rich history. Elevate your snacking and savor the warmth of Saudi hospitality!"
      ),
      banner: "/images/products-banners/Saudi.jpg",
    },
    {
      id: "5",
      imgUrl: "/images/products/Sagey.jpg",
      name: t("Majdoul"),
      desc: t(
        "Indulge in the regal experience of Majdoul dates plump which are golden, and irresistibly sweet. These dates are a true delicacy, known for their rich caramel-like flavor and soft, chewy texture. Majdoul dates are the epitome of luxury, offering a taste that lingers on the palate. they offer a multitude of health benefits. Renowned for their rich caramel-like flavor and delightful, soft, and chewy texture, Majdoul dates stand out as a true delicacy. Packed with essential nutrients, they contribute to overall well-being and represent the epitome of a luxurious and healthy treat."
      ),
      banner: "/images/products-banners/Majdoul.jpg",
    },
    {
      id: "6",
      imgUrl: "/images/products/Saudi.jpg",
      name: t("Sukkary"),
      desc: t(
        "Sukkary dates, the jewels of the date kingdom, are renowned for their amber hue and luscious, honey-like taste. Soft, with a melt-in-your-mouth consistency, Sukkary dates offer a delightful balance of sweetness and a hint of caramel. Sukkary dates not only delight the palate with their amber hue and honey-like taste but also offer health benefits.  Elevate your moments with the exquisite flavor of Sukkary."
      ),
      banner: "/images/products-banners/Sukkary.jpg",
    },
    {
      id: "7",
      imgUrl: "/images/products/Ajwa.jpg",
      name: t("Mabroom"),
      desc: t(
        "Experience the natural sweetness of Mabroom dates, known for their elongated shape and rich, toffee-like flavor. Mabroom dates offer a satisfying chewiness and a nuanced taste that evolves with each bite. Enjoy the wholesome goodness and timeless charm of Mabroom dates."
      ),
      banner: "/images/products-banners/Mabroom.jpg",
    },
  ];

  const params = useParams<{ product_id: string }>();

  const selectedProduct = products.find(
    (product) => product.id === params.product_id
  );

  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  const { id, imgUrl, name, desc } = selectedProduct;

  return (
    <section className={styles.product__details}>
      <section
        className={styles.product__banner}
        style={{
          backgroundImage: `url(${selectedProduct.banner})`,
        }}
      ></section>
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
