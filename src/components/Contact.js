import styles from "../../styles/Contact.module.css";
import Button from "./Button";
import Image from "next/image";

function Contact() {
  return (
    <div className={styles.contactContainer}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatibus odit consequuntur enim voluptatem vel id repellat. Modi
            recusandae dolor assumenda doloremque dolorem aliquid distinctio
            vitae, est earum incidunt. Quis.
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
