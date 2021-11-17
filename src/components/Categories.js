import styles from "../../styles/Categories.module.css";
import Button2 from "./Button2";

function Categories({categories, filterItems, activeCategory}) {
    return (
        <div className={styles.btnContainer}>
          {categories.map((category, index)=>{
              return (
                <>
                  <div className={styles.btnContainer}>
                    <Button2
                      type='secondaryBtn'
                      href='#'
                      className={
                        activeCategory === category
                          ? styles.fiterBtn + " " + styles.active
                          : styles.filterBtn
                      }
                      key={index}
                      onClick={() => filterItems(category)}
                      label={category}
                    />
                  </div>
                </>
              );
          })}
        </div>
    )
}

export default Categories
