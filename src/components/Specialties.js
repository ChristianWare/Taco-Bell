import styles from "../../styles/Specialties.module.css";
import Image from "next/image";
import Link from "next/link";



function Specialties({ specialties }) {
  return (
    <section className={styles.specialSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4 id='specials'>Today&apos;s Specials</h4>
        </div>
        <div className={styles.displayFlex}>
          {specialties.map((special) => (
            <div key={special.id} className={styles.chefWrapper}>
              <div className={styles.chefItemImg}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.img}
                    alt='special Item'
                    src={`/images/${special.src}`}
                    width={special.width}
                    height={special.height}
                    layout='responsive'
                  />
                </div>
                <div className={styles.chefOverlay}>
                  <p>{special.desc}</p>
                </div>
              </div>
              <div className={styles.chefItemFooter}>
                <h2>{special.footerName}</h2>
                <h3>{special.footerPrice}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specialties;
