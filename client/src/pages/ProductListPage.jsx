import { useSelector } from 'react-redux'
import { categoryListSelector } from '../store/categorySlice'
import { productListSelector } from '../store/productSlice'
import ProductList from '../components/ProductList/ProductList'
import PageHeader from '../components/PageHeader/PageHeader'
import FilterProducts from '../components/FilterProducts/FilterProducts'

const ProductListPage = () => {
  const productList = useSelector(productListSelector())
  const categoryList = useSelector(categoryListSelector())
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
    </>
  )
}

export default ProductListPage
