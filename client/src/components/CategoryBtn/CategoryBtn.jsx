import styles from './CategoryBtn.module.scss'
const CategoryBtn = ({ children }) => {
  return (
    <button className={`${styles.categoryBtn} ${styles.active}`}>
      {children}
    </button>
  )
}
export default CategoryBtn
