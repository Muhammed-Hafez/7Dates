import styles from "./About.module.scss";
import Button from "../Button/Button";
// import Divider from "../Divider/Divider";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__images}>
          <div className={styles.left__images}>
            <img src="/images/about/about-1.jpg" alt="" />
            <img src="/images/about/about-3.jpg" alt="" />
          </div>
          <div className={styles.right__images}>
            <img src="/images/about/about-4.jpg" alt="" />
            <img src="/images/about/about-2.jpg" alt="" />
          </div>
        </div>

        <div className={styles.about__content}>
          <p className={styles.about__subtitle}>About Us</p>
          <h1 className={styles.about__title}>
            The success history of <br /> 7Dates in 18 years
          </h1>

          {/* <Divider /> */}

          <p className={styles.about__desc}>
            We have more than 18 years of experience in sourcing and packing the
            finest dates products.
          </p>

          <p
            className={styles.about__desc}
            style={{
              marginBottom: "2rem",
            }}
          >
            Seven Dates principal goal is to provide the highest quality dates
            products to UAE nationals, residents, the Gulf Countries and whole
            world.
          </p>
          <Button url="/about">Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
