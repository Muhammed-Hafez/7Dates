import Clients from "@/components/Clients/Clients";
import styles from "../../styles/AboutPage.module.scss";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

const AboutPage = () => {
  return (
    <>
      <section className={styles.about}></section>

      <section className={styles.about__content}>
        <h1>About Us</h1>
        <p>The success history of 7 Dates in 18 years</p>
      </section>

      <section className={styles.about__story}>
        <div className={styles.story__content}>
          <h2>Our Story</h2>
          <p>
            With a legacy spanning over 18 years, Seven Dates Factory Packing
            and Processing Dates LLC has been a pioneer in sourcing and packing
            the finest date products. Our journey is rooted in a dedication to
            quality, customer satisfaction, and a passion for delivering the
            best of the UAE's date varieties.
          </p>
        </div>

        <div className={styles.story__img}>
          <img src="/images/products/Saudi.png" alt="About" />
        </div>
      </section>

      <section className={styles.about__vision}>
        <div className={styles.vision__content}>
          <h2>Vision</h2>
          <p>
            At Seven Dates, our vision is to be the leading provider of
            high-quality date products globally, ensuring convenience,
            excellence, and a touch of tradition in every date
          </p>
        </div>

        <div className={styles.vision__img}>
          <img src="/images/products/Safawy.png" alt="About" />
        </div>
      </section>

      <section className={styles.about__mission}>
        <div className={styles.mission__content}>
          <h2>Mission</h2>
          <p>
            Our mission is to deliver the finest dates to UAE nationals,
            residents, and the global community, leveraging our 18 years of
            experience, cutting-edge technology, and a commitment to customer
            satisfaction
          </p>
        </div>

        <div className={styles.mission__img}>
          <img src="/images/products/Ajwa.png" alt="About" />
        </div>
      </section>

      <Clients />
      <ContactInfo />
    </>
  );
};

export default AboutPage;
