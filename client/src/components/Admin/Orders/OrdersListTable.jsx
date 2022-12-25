import { useDispatch, useSelector } from 'react-redux'
import {
  productListSelector,
  productLoadingSelector,
  removeProduct
} from '../../../store/productSlice'
import AdminNavbar from '../AdminNavbar'
import { useProductsFilter } from '../../../hooks/useProductsFilter'
import { useState } from 'react'
import Filter from '../../Filter/Filter'
import Pagination from '../../UI/Pagination/Pagination'
import { paginate } from '../../../utils/paginate'
import Loader from '../../UI/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import OrdersTable from './OrdersTable'
import {
  orderListSelector,
  orderLoadingSelector
} from '../../../store/orderSlice'
const ProductListTable = () => {
  const dispatch = useDispatch()
  const orderList = useSelector(orderListSelector())
  const isProductsLoading = useSelector(orderLoadingSelector())
  // const [filter, setFilter] = useState({ sort: '', query: '' })
  // const sortedAndSearchedProducts = useFilter(
  //   orderList,
  //   filter.sort,
  //   filter.query
  // )
  // const [currentPage, setCurrentPage] = useState(1)
  // const count = sortedAndSearchedProducts.length
  // const pageSize = 9
  // const productsCrop = paginate(
  //   sortedAndSearchedProducts,
  //   currentPage,
  //   pageSize
  // )

  const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(id)
  }

  const handleDelete = (productId) => {
    dispatch(removeProduct(productId))
  }
  // const handlePageChange = (pageIndex) => {
  //   setCurrentPage(pageIndex)
  // }

  if (!isProductsLoading) {
    return (
      <>
        <AdminNavbar
          title="Products"
          path="/admin/add-product"
          label="new product"
        />
        <div style={{ minHeight: 900, overflow: 'auto' }}>
          {/*<Filter filter={filter} setFilter={setFilter} />*/}
          <OrdersTable
            orders={orderList}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
        {/*<Pagination*/}
        {/*  itemsCount={count}*/}
        {/*  pageSize={pageSize}*/}
        {/*  currentPage={currentPage}*/}
        {/*  onPageChange={handlePageChange}*/}
        {/*/>*/}
      </>
    )
  }
  return <Loader />
}

export default ProductListTable
