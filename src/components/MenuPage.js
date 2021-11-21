import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { items } from "../../data";
import styles from "../../styles/MenuPage.module.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

function MenuPage({ tacoMenuItems }) {
  const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className={styles.menuSection}>
        <div className={styles.title}>
          <h2>Our Menu</h2>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} tacoMenuItems={tacoMenuItems} />
      </section>
    </main>
  );
}

export default MenuPage;
