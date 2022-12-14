import styles from "./ProductList.module.scss"
import { Link } from "react-router-dom"
import IMAGES from "../../constants/images"
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2"

const ProductList = ({ productList }) => {
  // let { url } = useRouteMatch();
  return (
    <ul className={styles.productList}>
      {productList &&
        productList.map((item) => (
          <li key={item._id} className={styles.productListItem}>
            <div className={styles.cardBanner}>
              <img
                src={IMAGES[item.image]}
                alt="pic"
                className={styles.imageContain}
              />

              <div className={styles.cardBadge}>Popular</div>

              <ul className={styles.cardActionList}>
                <li className={styles.cardActionItem}>
                  <button className={styles.cardActionBtn}>
                    <HiOutlineHeart />
                  </button>
                </li>
                <li className={styles.cardActionItem}>
                  <button className={styles.cardActionBtn}>
                    <HiOutlineShoppingCart />
                  </button>
                </li>
              </ul>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <Link to={item._id}>{item.name}</Link>
              </h3>
              <div className={styles.cardPrice}>
                <span>€</span> {item.price}
              </div>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default ProductList
