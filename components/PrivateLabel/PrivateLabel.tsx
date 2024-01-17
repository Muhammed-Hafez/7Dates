import Button from "../Button/Button";
import styles from "./PrivateLabel.module.scss";

export default function PrivateLabel() {
  return (
    <section className={styles.private}>
      <div className={styles.private__container}>
        <div className={styles.private__img}>
          <img src="/images/private-img.png" alt="" />
        </div>

        <div className={styles.private__content}>
          <h1 className={styles.private__title}>Private Label</h1>
          <p className={styles.private__desc}>
            We offer convenience, quality and flexibility Seven Dates Factory
            Packing and Processing Dates LLC - a local based Dates manufacturing
            company in United Arab Emirates.
          </p>

          <p
            className={styles.private__desc}
            style={{
              marginBottom: "2rem",
            }}
          >
            Seven Dates principal goal is to provide the highest quality dates
            products to UAE nationals, residents, the Gulf Countries and whole
            world.
          </p>

          <Button url="/private-label">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
