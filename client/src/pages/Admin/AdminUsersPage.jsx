import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from '../../utils/paginate'
import Pagination from '../../components/UI/Pagination/Pagination'
import { useProductsFilter } from '../../hooks/useProductsFilter'
import Filter from '../../components/Filter/Filter'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import {
  isUsersLoadingSelector,
  removeUser,
  usersListSelector
} from '../../store/userSlice'
import UsersTable from '../../components/Admin/Users/UsersTable'

const UsersListPage = () => {
  const dispatch = useDispatch()
  const usersList = useSelector(usersListSelector())
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9
  const isUsersLoading = useSelector(isUsersLoadingSelector())
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedUsers = useProductsFilter(usersList, filter.sort, filter.query)
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const navigate = useNavigate()
  const handleEdit = (id) => {
    navigate(id)
  }

  const handleDelete = (userId) => {
    dispatch(removeUser(userId))
  }

  const count = sortedAndSearchedUsers.length
  const usersCrop = paginate(sortedAndSearchedUsers, currentPage, pageSize)
  return (
    <>
      <AdminNavbar title="Product List" label="add new" path="add-product" />
      <Filter
        filter={filter}
        setFilter={setFilter}
        options={[
          { value: 'name', name: 'По имени' },
          { value: 'age', name: 'По возрасту' }
        ]}
      />
      <div style={{ border: '1px solid red', minHeight: 600 }}>
        {!isUsersLoading && sortedAndSearchedUsers.length === 0 ? (
          <p>Нет товаров по условию</p>
        ) : (
          <>
            {isUsersLoading ? (
              <Loader />
            ) : (
              <UsersTable
                users={usersCrop}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            )}
          </>
        )}
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

export default UsersListPage
