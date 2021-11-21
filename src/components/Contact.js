import styles from "../../styles/Contact.module.css";
import Button from "./Button";
import Image from "next/image";

function Contact() {
  return (
    <div id='socials' className={styles.contactContainer}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <Image
            className={styles.imgwrapper}
            src={"/images/ss.jpg"}
            width='100%'
            height='100%'
            layout='responsive'
            priority='true'
          />
        </div>
        <div className={styles.details}>
          <h2>Follow us on Social Media</h2>
          <p>
            Taco Bell is a role model on social media. Taco Bell exists on every
            major social media platform, including Facebook, Twitter, YouTube,
            Instagram, Pinterest and LinkedIn. It's not just the millions of
            followers, but the level of engagement and fan conversations that
            the brand receives that makes them a winner.
          </p>
          <div className={styles.btnContainer}>
            <Button href='/' label='Twitter' type='primaryBtn' />
            <Button href='/' label='Instagram' type='secondaryBtn' />
            <Button href='/' label='Facebook' type='tertiaryBtn' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
