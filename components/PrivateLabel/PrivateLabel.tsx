import Button from "../Button/Button";
import styles from "./PrivateLabel.module.scss";

export default function PrivateLabel() {
  return (
    <section className={styles.private}>
      <div className={styles.private__container}>
        <h1 className={styles.private__title}>Private Label</h1>
        <p className={styles.private__desc}>
          We offer convenience, quality and flexibility Seven Dates Factory
          Packing and Processing Dates LLC - a local based Dates manufacturing
          company in United Arab Emirates.
          <br /> <br />
          We have more than 18 years of experience in sourcing and packing the
          finest dates products.
          <br /> <br />
          Seven Dates principal goal is to provide the highest quality dates
          products to UAE nationals, residents, the Gulf Countries and whole
          world.
          <br /> <br />
          Our team of experts has carefully developed a wide range of Dates
          items for retailers and private label for our partners according to
          the required specifications that is culturally relevant, cost
          effective and convenient.
        </p>

        <Button title="Learn More" url="/private-label" />
      </div>
    </section>
  );
}
