import DashBoard from '../components/AdminDashBoard/DashBoard'
import { Outlet } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader'

const AdminPage = () => {
  return (
    <>
      <PageHeader title="admin" subTitle="Dashboard" />
      <DashBoard>
        <Outlet />
      </DashBoard>
    </>
  )
}

export default AdminPage
