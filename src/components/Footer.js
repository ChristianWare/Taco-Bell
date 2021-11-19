import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "./Button";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.aboutContent}>
          <h4 className={styles.footerSub}>About Us</h4>
          <p>
            Certain foods and beverages sold or served here can expose you to
            chemicals including acrylamide in many fried or baked foods, and
            mercury in fish, which are known to the State of California to cause
            cancer and birth defects or other reproductive harm. For more
            information go to www.P65Warnings.ca.gov/restaurant
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
