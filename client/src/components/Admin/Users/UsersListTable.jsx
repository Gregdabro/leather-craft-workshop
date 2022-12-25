import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../AdminNavbar'
import { useProductsFilter } from '../../../hooks/useProductsFilter'
import { useState } from 'react'
import Filter from '../../Filter/Filter'
import Pagination from '../../UI/Pagination/Pagination'
import { paginate } from '../../../utils/paginate'
import Loader from '../../UI/Loader/Loader'
import UsersTable from './UsersTable'
import {
  removeUser,
  usersListSelector,
  isUsersLoadingSelector
} from '../../../store/userSlice'
const UsersListTable = () => {
  const dispatch = useDispatch()
  const usersList = useSelector(usersListSelector())
  const isUsersLoading = useSelector(isUsersLoadingSelector())
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedUsers = useProductsFilter(usersList, filter.sort, filter.query)
  const [currentPage, setCurrentPage] = useState(1)
  const count = sortedAndSearchedUsers.length
  const pageSize = 9
  const usersCrop = paginate(sortedAndSearchedUsers, currentPage, pageSize)
  const handleDelete = (userId) => {
    dispatch(removeUser(userId))
  }
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if (!isUsersLoading) {
    return (
      <>
        <AdminNavbar title="Users" isBackButton={true} />
        <div style={{ minHeight: 900, overflow: 'auto' }}>
          <Filter filter={filter} setFilter={setFilter} />
          <UsersTable users={usersCrop} onDelete={handleDelete} />
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    )
  }
  return <Loader />
}

export default UsersListTable
