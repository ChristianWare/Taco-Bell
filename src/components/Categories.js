import styles from '../../styles/Categories.module.css'
import Button2 from './Button2'

function Categories({ filterItems }) {
  return (
    <div className={styles.btnContainer}>
      <Button2
        type='tertiaryBtn'
        label='all'
        href='#'
        onClick={() => filterItems("all")}
      />
      <Button2
        type='secondaryBtn'
        label='breakfast'
        href='#'
        onClick={() => filterItems("breakfast")}
      />
      <Button2
        type='primaryBtn'
        label='lunch'
        href='#'
        onClick={() => filterItems("lunch")}
      />
    </div>
  );
}

export default Categories;
