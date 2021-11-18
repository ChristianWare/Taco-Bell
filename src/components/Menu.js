import Image from "next/image";
import styles from "../../styles/Menu.module.css";

function Menu({ items }) {
  return (
    <div className={styles.sectionCenter}>
      {items.map((menuItem) => {
        const { id, title, img, desc, width, height, price } = menuItem;
        return (
          <article key={id} className={styles.menuItem}>
            <div className={styles.photoContainer}>
              <div className={styles.container}>
                <Image
                  className={styles.photo}
                  src={`/images/${img}`}
                  alt={title}
                  width={width}
                  height={height}
                  // objectFit= 'cover'
                  layout='responsive'
                />
              </div>
            </div>
            <div className={styles.itemInfo}>
              <header>
                <h4>{title}</h4>
                <h4 className={styles.price}>${price}</h4>
              </header>
              <p className={styles.itemText}>{desc}</p>
              <header>
                <h4>Nutrition</h4>
              </header>
              <p className={styles.itemTextNut}>
                Carbs: 150g / Protien: 30g / Calories: 200g / Sodium: 50g
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
