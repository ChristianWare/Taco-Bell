import Image from "next/image";
import styles from "../../styles/About.module.css";

function About() {
  return (
    <section id='about' className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <div className={styles.title}>
          <h4>We've Been making tacos' before you were born</h4>
        </div>
      </div>
      <div className={styles.aboutRight}>
        <div className={styles.pCont}>
          <p className={styles.paraText}>
            Taco Bell was founded by Glen Bell, an entrepreneur who first opened
            a hot dog stand called Bell's Drive-In in San Bernardino, California
            in 1948. Bell watched long lines of customers at a Mexican
            restaurant called the Mitla Cafe, located across the street, which
            became famous among residents for its hard-shelled tacos. Bell
            attempted to reverse-engineer the recipe, and eventually the owners
            allowed him to see how the tacos were made. He took what he had
            learned and opened a new stand in 1951.
          </p>
        </div>
        <div className={styles.imgCont}>
          <Image
            className={styles.tacoImg}
            src='/images/taco1.jpg'
            alt='taco pocket'
            width='100%'
            height='100%'
            layout='responsive'
          />
        </div>
      </div>
    </section>
  );
}

export default About;
