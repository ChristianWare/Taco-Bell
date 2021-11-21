import styles from "../../styles/Hero.module.css";
import Button from "./Button";

function Hero() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>LIVE MAS</h1>
        <p>
          Welcome to Taco Bell's redesigned website. "Live Mas" animates our brand and encapsulates the company’s
          philosophy of enriching the lives of our customers and employees in
          everything we do.
        </p>
        <div className={styles.buttonContainer}>
          <Button type='primaryBtn' label='Menu' href='/' />
          <Button type='secondaryBtn' label='Specials' href='/' />
          <Button type='tertiaryBtn' label='Contact' href='/' />
        </div>
      </div>
    </header>
  );
}

export default Hero;
