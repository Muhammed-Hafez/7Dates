import Link from "next/link";
import { GoCheckCircleFill } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./Benefits.module.scss";
import Button from "../Button/Button";

const Benefits = () => {
  return (
    <section className={`${styles.benefits} px-4 md:px-10 py-10 md:py-20`}>
      <div
        className={`${styles.benefits__container} w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12`}
      >
        <div className={`${styles.benefits__content}`}>
          <h2 className={styles.benefits__title}>
            The Health Marvels of Dates
          </h2>
          <p className={`${styles.benefits__desc}`}>
            Dates, sweet fruits from the date palm tree, are more than just a
            delicious treat. <br /> Packed with essential nutrients, aiding
            digestion, and providing a natural energy boost, these tiny wonders
            are a must-have for a healthy diet.
          </p>

          <div className={`${styles.benefits__listContainer} mb-8`}>
            <ul
              className={`${styles.benefits__list} flex md:flex-row items-start sm:flex-col justify-between`}
            >
              <li>
                <GoCheckCircleFill size={35} color={"#fff"} />
                Rich in Nutrients
              </li>
              <li>
                <GoCheckCircleFill size={35} color={"#fff"} />
                Natural Energy Boost
              </li>
            </ul>

            <ul
              className={`${styles.benefits__list} flex md:flex-row items-start sm:flex-col justify-between`}
            >
              <li>
                <GoCheckCircleFill size={35} color={"#fff"} />
                High in Fiber
              </li>
              <li>
                <GoCheckCircleFill size={35} color={"#fff"} />
                Heart Health Support
              </li>
            </ul>
          </div>

          <Button title="Explore More" url="/products" />
        </div>

        <div className={`${styles.benefits__video}`}>
          <FaPlayCircle size={180} color={"#fff"} />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
