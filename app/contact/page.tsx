import Button from "@/components/Button/Button";
import styles from "../../styles/ContactPage.module.scss";

const ContactPage = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__heading}>
          <h1 className={styles.contact__title}>Contact</h1>
        </div>

        <div className={styles.contact__form}>
          <form>
            <input type="text" name="name" id="name" placeholder="Your name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />

            <textarea
              name="message"
              id="message"
              placeholder="Your message"
            ></textarea>
            <div className={styles.submit}>
              <Button url="#">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
