import { Route, Routes } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader'
import CommonList from '../components/Admin/CommonList'
import styles from '../components/Admin/Admin.module.scss'
import Sidebar from '../components/Admin/Sidebar'
import ProductsListTable from '../components/Admin/Products/ProductsListTable'
import UsersListTable from '../components/Admin/Users/UsersListTable'
import OrdersListTable from '../components/Admin/Orders/OrdersListTable'
import AddProduct from '../components/Admin/AddProductForm/AddProduct'

const AdminPage = () => {
  return (
    <>
      <PageHeader title="admin" subTitle="Dashboard" />
      <div className={styles.dashBoard}>
        <Sidebar/>
        <div className={styles.content}>
          <Routes>
            <Route path={''} element={<ProductsListTable/>} />
            <Route path={'/users'} element={<UsersListTable />} />
            <Route path={'/orders'} element={<OrdersListTable />} />
            <Route path={'/add-product'} element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AdminPage
