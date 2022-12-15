import styles from './FilterProducts.module.scss'
import CategoryBtn from '../CategoryBtn/CategoryBtn'

const FilterProducts = ({ categories }) => {
  return (
    <div className={styles.filterProducts}>
      <div className={styles.categoryList}>
        <CategoryBtn>all</CategoryBtn>
        {categories && categories.map(item => (
          <CategoryBtn key={item._id}>{item.name}</CategoryBtn>
        ))}
      </div>
      <div className={styles.colorList}>
        <button>red</button>
        <button>blue</button>
        <button>gray</button>
      </div>
      <div className={styles.select}>
        <select>select</select>
      </div>
    </div>
  )
}

export default FilterProducts
