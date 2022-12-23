import styles from './FilterProducts.module.scss'
import CategoryBtn from '../CategoryBtn/CategoryBtn'
import CategoryBtnList from '../UI/CategoryBtnList/CategoryBtnList'

const FilterProducts = ({
  categories,
  onItemSelect,
  selectedItem,
  clearFilter
}) => {
  return (
    <div className={styles.filterProducts}>
      <CategoryBtnList
        categories={categories}
        onItemSelect={onItemSelect}
        selectedItem={selectedItem}
        clearFilter={clearFilter}
      />
      <div className={styles.colorList}>
        <input placeholder="Search..." />
      </div>
      <div className={styles.select}>
        <select>select</select>
      </div>
    </div>
  )
}

export default FilterProducts
