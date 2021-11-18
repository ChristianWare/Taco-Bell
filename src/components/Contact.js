import styles from "../../styles/Contact.module.css";
import Button2 from "./Button2";
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
            <Button2 label='Twitter' type='primaryBtn' />
            <Button2 label='Instagram' type='secondaryBtn' />
            <Button2 label='Facebook' type='tertiaryBtn' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
