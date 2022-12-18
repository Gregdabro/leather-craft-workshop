import styles from './Admin.module.scss'
import { Link } from 'react-router-dom'
import { AiOutlineShop } from 'react-icons/ai'

const DashBoard = ({ children }) => {
  return (
    <div className={styles.dashBoard}>
      <div className={styles.sideBar}>
        <div className={styles.sideBarTop}>
          <span className={styles.logo}>Name Admin</span>
        </div>
        <div className={styles.sideBarMain}>
          <Link to="/admin/users" className={styles.item}>
            <AiOutlineShop className={styles.icon} />
            <span>Users</span>
          </Link>
          <Link to="/admin/products" className={styles.item}>
            <AiOutlineShop className={styles.icon} />
            <span>Products</span>
          </Link>
          <Link to="/admin/orders" className={styles.item}>
            <AiOutlineShop className={styles.icon} />
            <span>Orders</span>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default DashBoard
