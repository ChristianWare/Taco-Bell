import React, { useState, useRef } from "react";
import styles from "../../styles/Newsletter.module.css";
import Button2 from "./Button2";

function Newsletter() {
  const emailInput = useRef(null);

  const [done, setDone] = useState(false);

  const clearInput = () => {
    emailInput.current.value = "";
    setDone(!done);
  };

  return (
    <section id='newsletter' className={styles.newsletterSection}>
      <div className={styles.rowContainer}>
        <div className={styles.col}>
          <h2>Join Our Newsletter for deals n&apos; discounts!</h2>
          <form>
            <input
              type='email'
              placeholder='Your Email Here'
              ref={emailInput}
            />
            <br />
            <Button2
              type='secondaryBtn'
              label={done ? "clear" : "Sign Up"}
              onClick={clearInput}
            />
            <p className={styles.response}>
              {done && "Thank You, we will be in touch with you soon."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
