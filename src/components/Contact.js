import styles from "../../styles/Contact.module.css";
import Button from "./Button";
import Image from "next/image";

function Contact() {
  const twitterUrl = "https://twitter.com/tacobellnews";
  const instaUrl = "https://www.instagram.com/tacobell/?hl=en";
  const fbUrl = "https://www.facebook.com/tacobell/";

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
          <h2 id='socials'>Follow us on Social Media</h2>
          <p>
            Taco Bell is a role model on social media. Taco Bell exists on every
            major social media platform, including Facebook, Twitter, Instagram,
            Pinterest and LinkedIn. It's not just the millions of followers, but
            the level of engagement and fan conversation.
          </p>
          <div className={styles.btnContainer}>
            <Button
              href={twitterUrl}
              label='Twitter'
              type='primaryBtn'
              target='_blank'
            />
            <Button
              href={instaUrl}
              label='Instagram'
              type='secondaryBtn'
              target='_blank'
            />
            <Button
              href={fbUrl}
              label='Facebook'
              type='tertiaryBtn'
              target='_blank'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
