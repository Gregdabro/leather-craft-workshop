import { Outlet } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import styles from '../../components/Admin/Admin.module.scss'
import Sidebar from '../../components/Admin/Sidebar'
import ProductListTable from '../../components/Admin/Products/ProductListTable'

const AdminPage = () => {
  return (
    <>
      <PageHeader title="admin" subTitle="Dashboard" />
      <div className={styles.dashBoard}>
        <Sidebar />
        <div className={styles.content}>
          <ProductListTable />
        </div>
      </div>
    </>
  )
}

export default AdminPage
