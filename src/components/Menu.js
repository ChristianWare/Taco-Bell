import React, { useState } from "react";
import styles from "../../styles/Menu.module.css";
import { tacoMenu } from "../../data";
import Categories from "./Categories";

const allCategories = [
  "all",
  ...new Set(tacoMenu.map((item) => item.category)),
];

function Menu() {
  const [menuItems, setMenuItems] = useState(tacoMenu);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filteritems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(tacoMenu);
      return;
    }
    const newItems = tacoMenu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className={styles.menuSection}>
      <div className={styles.title}>
        <h2>Menu List</h2>
      </div>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filteritems}
      />
    </section>
  );
}

export default Menu;
