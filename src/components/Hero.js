import styles from "../../styles/Hero.module.css";
import Button from "./Button";

function Hero() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>LIVE MAS</h1>
        <p lang='en'>
          Welcome to Taco Bell&apos;s redesigned website. &apos;Live Mas&apos;
          animates our brand and encapsulates the company’s philosophy of
          enriching the lives of our customers in every meal we make.
        </p>
        <div className={styles.buttonContainer}>
          <Button type='tertiaryBtn' label='Menu' href='#menu' />
          <Button type='secondaryBtn' label='Specials' href='#specials' />
          <Button type='primaryBtn' label='Contact' href='#socials' />
        </div>
      </div>
    </header>
  );
}

export default Hero;

