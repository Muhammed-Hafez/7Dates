import Clients from "@/components/Clients/Clients";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

import styles from "../../styles/PrivateLabelPage.module.scss";

const PrivateLabelPage = () => {
  return (
    <>
      <section className={styles.private}></section>

      <section className={styles.private__content}>
        <h1>Private Label</h1>
        <p>
          We offer convenience, quality and flexibility 7Dates Factory Packing
          and Processing Dates LLC - a local based Dates manufacturing company
          in United Arab Emirates. We have more than 18 years of experience in
          sourcing and packing the finest dates products. Seven Dates principal
          goal is to provide the highest quality dates products to UAE
          nationals, residents, the Gulf Countries and whole world. Our team of
          experts has carefully developed a wide range of Dates items for
          retailers and private label for our partners according to the required
          specifications that is culturally relevant, cost effective and
          convenient.
          <br /> <br />
          we are actively improving our business by closely understanding the
          needs of our most valuable asset - our customers. Motivated by their
          positive response for our products, we are constantly in touch with
          our suppliers and stakeholders to uphold the reputation that we have
          built in market. To attain our mission and vision, we have acquired
          sophisticated and well-equipped machinery at our processing plant.
          Safety and hygiene for our customers is primary concern. We have
          adopted the best practices in the Dates industry to ensure that.
          <br /> <br />
          7Dates Limited fosters and maintains the competitive edge in terms of
          quality by incorporating the latest technological developments in the
          food manufacturing sector.
          <br /> <br />
          We have the capability for packing the dates products into different
          packaging from dates packed loose 10 kg cartons, 1 kg thermoform packs
          and the foam, crystal and round tubes trays to 50g packs and the gift
          boxes, etc.
        </p>
      </section>

      <Clients />
    </>
  );
};

export default PrivateLabelPage;
