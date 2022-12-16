import PageHeader from '../../components/PageHeader/PageHeader'
import styles from './AdminPage.module.scss'
import { AiOutlineSearch, AiOutlineShop } from 'react-icons/ai'
import DataTable from '../../components/DataTable/DataTable'

const AdminPage = () => {
  return (
    <>
      <PageHeader title="admin" subTitle="Dashboard" />
      <div className={styles.admin}>
        <div className={styles.sideBar}>
          <div className={styles.top}>
            <span className={styles.logo}>logo</span>
          </div>
          <div className={styles.center}>
            <ul>
              <p className={styles.title}>List</p>
              <li className={styles.item}>
                <AiOutlineShop className={styles.icon} />
                <span>Users</span>
              </li>
              <li className={styles.item}>
                <AiOutlineShop className={styles.icon} />
                <span>Products</span>
              </li>
              <li className={styles.item}>
                <AiOutlineShop className={styles.icon} />
                <span>Orders</span>
              </li>
              <li className={styles.item}>
                <AiOutlineShop className={styles.icon} />
                <span>Delivery</span>
              </li>
              <p className={styles.title}>User</p>
              <li className={styles.item}>
                <AiOutlineShop className={styles.icon} />
                <span>Profile</span>
              </li>
              <li className={styles.item}>
                <AiOutlineShop className={styles.icon} />
                <span>Logout</span>
              </li>
            </ul>
          </div>
          <div className={styles.bottom}>
            <div className={styles.colorOptions}></div>
            <div className={styles.colorOptions}></div>
          </div>
        </div>
        <div className={styles.container}>
          <DataTable />
        </div>
      </div>
    </>
  )
}

export default AdminPage
