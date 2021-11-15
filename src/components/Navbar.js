import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { BsBellFill } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <span className={styles.navbarLogo}>
            <BsBellFill className={styles.navbarIcon} />
            <a>Taco Bell</a>
          </span>
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : styles.navMenu + " " + styles.active
          }
          onClick={openMenu}
        >
          <li className={styles.navItem}>
            <Link href='#menu'>
              <a onClick={openMenu}>MENU</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#locations'>
              <a onClick={openMenu}>ABOUT</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#delivery'>
              <a onClick={openMenu}>DELIVERY</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#rewards'>
              <a onClick={openMenu}>REWARDS</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#nutrition'>
              <a onClick={openMenu}>NUTRITION</a>
            </Link>
          </li>
        </ul>
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
