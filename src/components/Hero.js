import styles from "../../styles/Hero.module.css";
import Button from "./Button";

function Hero() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>LIVE MAS</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fuga
          commodi id doloribus pariatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
