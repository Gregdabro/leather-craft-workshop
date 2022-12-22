import { useSelector } from 'react-redux'
import { categoryListSelector } from '../store/categorySlice'
import { productListSelector } from '../store/productSlice'
import ProductList from '../components/ProductList/ProductList'
import PageHeader from '../components/PageHeader/PageHeader'
import FilterProducts from '../components/FilterProducts/FilterProducts'
import Pagination from '../components/UI/Pagination/Pagination'
import { useState } from 'react'

const ProductListPage = () => {
  const productList = useSelector(productListSelector())
  const categoryList = useSelector(categoryListSelector())
  const [currentPage, setCurrentPage] = useState(1)
  const count = productList.length
  const pageSize = 1
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  return (
    <>
      <PageHeader title="catalog" subTitle="Leather Belts" />
      <FilterProducts categories={categoryList} />
      <ProductList>
        {productList &&
          productList.map((item) => (
            <ProductList.Item key={item._id} item={item} />
          ))}
      </ProductList>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default ProductListPage
