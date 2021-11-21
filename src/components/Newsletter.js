import styles from "../../styles/Newsletter.module.css";
import Button2 from "./Button2";

function Newsletter() {
  return (
    <section id='newsletter' className={styles.newsletterSection}>
      <div className={styles.rowContainer}>
        <div className={styles.col}>
          <h2>Join Our Newsletter for deals n' discounts!</h2>
          <form>
            <input type='email' placeholder='Your Email Here' />
            <br />
            <Button2 type='secondaryBtn' label='Sign Up' />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
