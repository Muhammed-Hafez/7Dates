import Clients from "@/components/Clients/Clients";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

import styles from "../../styles/PrivateLabelPage.module.scss";

const PrivateLabelPage = () => {
  return (
    <>
      <section className={styles.private}></section>

      <section className={styles.private__content}>
        <h1>Private Label</h1>
        <p>The success history of 7 Dates in 18 years</p>
      </section>

      <ContactInfo />
    </>
  );
};

export default PrivateLabelPage;
