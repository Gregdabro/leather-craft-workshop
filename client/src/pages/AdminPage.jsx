import DashBoard from '../components/Admin/DashBoard'
import { Outlet, Route, Routes } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader'
import CommonList from '../components/Admin/CommonList'

const AdminPage = () => {
  return (
    <>
      <PageHeader title="admin" subTitle="Dashboard" />
      <DashBoard>
        <Outlet />
        {/*<Routes>*/}
        {/*  <Route path={'/products'} element={<CommonList />} />*/}
        {/*  <Route path={'/users'} element={<CommonList />} />*/}
        {/*  <Route path={'/orders'} element={<CommonList />} />*/}
        {/*</Routes>*/}
      </DashBoard>
    </>
  )
}

export default AdminPage
