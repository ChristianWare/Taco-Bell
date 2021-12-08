import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "./Button";

function Footer({ tacoMenuItems }) {
  const twitterUrl = "https://twitter.com/tacobellnews";
  const instaUrl = "https://www.instagram.com/tacobell/?hl=en";
  const fbUrl = "https://www.facebook.com/tacobell/";

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.aboutContent}>
          <h4 className={styles.footerSub}>About Us</h4>
          <p lang='en'>
            Taco Bell is an American-based chain of fast food restaurants
            originating in Irvine, California in 1962, by founder Glen Bell.
            Taco Bell is a subsidiary of Yum! Brands, Inc. The restaurants serve
            a variety of Mexican-inspired foods, that include: tacos, burritos,
            quesadillas, nachos, novelty and specialty items, along with a
            variety of &apos;value menu&apos; items. As of 2018, Taco Bell
            serves over two billion customers each year, at 7,072 restaurants,
            more than 93 percent of which are owned and operated by independent
            franchisees and licensees.
          </p>
          <div className={styles.aboutIcons}>
            <Link href={fbUrl}>
              <a target='_blank'>
                <FaFacebook className={styles.icon} />
              </a>
            </Link>
            <Link href={instaUrl}>
              <a target='_blank'>
                <AiFillInstagram className={styles.icon} />
              </a>
            </Link>
            <Link href={twitterUrl}>
              <a target='_blank'>
                <FaTwitter className={styles.icon} />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.footerItems}>
          <div className={styles.linksContent}>
            <h4 className={styles.footerSub}>Menu</h4>
            {tacoMenuItems.map((tacoMenuItem) => (
              <ul key={tacoMenuItem.sys.id}>
                <Link href='#menu' passHref>
                  <li>
                    <a>{tacoMenuItem.fields.title}</a>
                  </li>
                </Link>
              </ul>
            ))}
          </div>
          <div className={styles.linksContent}>
            <h4 className={styles.footerSub}>Specials</h4>
            <ul>
              <Link href='#specials' passHref>
                <li>
                  <a>Loco&apos;s Burritos&apos;</a>
                </li>
              </Link>
              <Link href='#specials' passHref>
                <li>
                  <a>Loco&apos;s Tacos&apos;</a>
                </li>
              </Link>
              <Link href='#specials' passHref>
                <li>
                  <a>Sip Something</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContent}>
            <h4 className={styles.footerSub}>Newsletter</h4>
            <ul>
              <Link href='#socials' passHref>
                <li>
                  <a>Deals</a>
                </li>
              </Link>
              <Link href='#socials' passHref>
                <li>
                  <a>Discounts</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        <small>
          TacoBell &copy;
          {new Date().getFullYear()} || Designed and Developed by Christian Ware
        </small>
      </div>
      <div className={styles.btnContainer}>
        <Button href='/' label='Back to Top' type='secondaryBtn' />
      </div>
    </footer>
  );
}

export default Footer;
