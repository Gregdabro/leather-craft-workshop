import { useState } from 'react'
import { useSelector } from 'react-redux'
import { categoryListSelector } from '../store/categorySlice'
import { productListSelector, productLoadingSelector } from '../store/productSlice'
import ProductList from '../components/ProductList/ProductList'
import PageHeader from '../components/PageHeader/PageHeader'
import Loader from '../components/UI/Loader/Loader'
import { paginate } from '../utils/paginate'
import Pagination from '../components/UI/Pagination/Pagination'
import { useProducts, useSelectedProducts } from '../hooks/useProducts'
import ProductFilter from '../components/ProductFilter/ProductFilter'

const ProductListPage = () => {
  const productList = useSelector(productListSelector())
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9
  const isProductLoading = useSelector(productLoadingSelector())
  const categoryList = useSelector(categoryListSelector())
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedProducts = useProducts(productList, filter.sort, filter.query)
  const selectedProducts = useSelectedProducts(productList, selectedCategory)
  const handleClearFilter = () => {
    setFilter({ sort: '', query: '' })
    setSelectedCategory('')
  }
  const handleCategorySelect = (item) => {
    if (filter.query !== '') setFilter({ sort: '', query: '' })
    setSelectedCategory(item)
  }
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const filteredProducts = selectedCategory ? selectedProducts : sortedAndSearchedProducts

  const count = filteredProducts.length
  const productsCrop = paginate(filteredProducts, currentPage, pageSize)
  return (
    <>
      <PageHeader title="catalog" subTitle="Leather Belts" />
      <ProductFilter
        filter={filter}
        setFilter={setFilter}
        selectedItem={selectedCategory}
        categories={categoryList}
        onItemSelect={handleCategorySelect}
        onClearFilter={handleClearFilter}
      />
      <div style={{ border: '1px solid red', minHeight: 600 }}>
        {!isProductLoading && filteredProducts.length === 0
          ? <p>Нет товаров по условию</p>
          : (
            <ProductList>
              {isProductLoading
                ? <Loader/>
                : productsCrop.map((item) => (
                  <ProductList.Item key={item._id} item={item} />
              ))}
            </ProductList>
          )
        }
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

export default ProductListPage
