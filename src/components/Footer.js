import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "./Button";

function Footer({ tacoMenuItems }) {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.aboutContent}>
          <h4 className={styles.footerSub}>About Us</h4>
          <p>
            Taco Bell is an American-based chain of fast food restaurants
            originating in Irvine, California in 1962, by founder Glen Bell.
            Taco Bell is a subsidiary of Yum! Brands, Inc. The restaurants serve
            a variety of Mexican-inspired foods, that include: tacos, burritos,
            quesadillas, nachos, novelty and specialty items, along with a
            variety of "value menu" items. As of 2018, Taco Bell serves over two
            billion customers each year, at 7,072 restaurants, more than 93
            percent of which are owned and operated by independent franchisees
            and licensees.
          </p>
          <div className={styles.aboutIcons}>
            <Link href='/'>
              <a>
                <FaFacebook className={styles.icon} />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <AiFillInstagram className={styles.icon} />
              </a>
            </Link>
            <Link href='/'>
              <a>
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
                <Link href='/'>
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
              <Link href='/'>
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>About Us</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>Services</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>Team</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>Blog</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContent}>
            <h4 className={styles.footerSub}>Newsletter</h4>
            <ul>
              <Link href='/'>
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>About Us</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        <small>TacoBell, Copyright &copy; js Year</small>
      </div>
      <div className={styles.btnContainer}>
        <Button href='/' label='Back to Top' type='secondaryBtn' />
      </div>
    </footer>
  );
}

export default Footer;
