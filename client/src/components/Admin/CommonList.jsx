import CommonTable from './CommonTable'
import { useSelector } from 'react-redux'
import {
  productListSelector,
  productLoadingSelector
} from '../../store/productSlice'
import styles from './Admin.module.scss'
import AdminNavbar from './AdminNavbar'
import { useProducts } from '../../hooks/useProducts'
import { useState } from 'react'
import ProductFilter from '../ProductFilter/ProductFilter'
import Pagination from '../UI/Pagination/Pagination'
import { paginate } from '../../utils/paginate'
import Loader from '../UI/Loader/Loader'
const CommonList = () => {
  const productList = useSelector(productListSelector())
  const isProductsLoading = useSelector(productLoadingSelector())
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedProducts = useProducts(
    productList,
    filter.sort,
    filter.query
  )
  const [currentPage, setCurrentPage] = useState(1)
  const count = sortedAndSearchedProducts.length
  const pageSize = 9
  const productsCrop = paginate(
    sortedAndSearchedProducts,
    currentPage,
    pageSize
  )
  const handleDelete = (id) => {
    console.log('id', id)
  }
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if (!isProductsLoading) {
    return (
      <>
        <div className={styles.main}>
          <AdminNavbar
            title="Products"
            path="/admin/add-product"
            label="new product"
          />
          <div className={styles.mainSection}>
            <ProductFilter filter={filter} setFilter={setFilter} />
            <CommonTable products={productsCrop} onDelete={handleDelete} />
          </div>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </>
    )
  }
  return <Loader />
}

export default CommonList
