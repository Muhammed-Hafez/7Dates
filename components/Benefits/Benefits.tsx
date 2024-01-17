import Link from "next/link";
import { GoCheckCircleFill } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./Benefits.module.scss";
import Button from "../Button/Button";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefits__container}>
        <div className={`${styles.benefits__content}`}>
          <h2 className={styles.benefits__title}>
            The Health Marvels of Dates
          </h2>
          <p className={styles.benefits__desc}>
            Dates, sweet fruits from the date palm tree, are more than just a
            delicious treat. <br /> Packed with essential nutrients, aiding
            digestion, and providing a natural energy boost, these tiny wonders
            are a must-have for a healthy diet.
          </p>

          <div className={styles.benefits__listContainer}>
            <ul className={styles.benefits__list}>
              <li>
                <GoCheckCircleFill size={35} color={"var(--light-color)"} />
                Rich in Nutrients
              </li>
              <li>
                <GoCheckCircleFill size={35} color={"var(--light-color)"} />
                Natural Energy Boost
              </li>
            </ul>

            <ul className={styles.benefits__list}>
              <li>
                <GoCheckCircleFill size={35} color={"var(--light-color)"} />
                High in Fiber
              </li>
              <li>
                <GoCheckCircleFill size={35} color={"var(--light-color)"} />
                Heart Health Support
              </li>
            </ul>
          </div>

          <Button url="/products">Explore More</Button>
        </div>

        <div className={`${styles.benefits__video}`}>
          <FaPlayCircle size={180} color={"var(--light-color)"} />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
