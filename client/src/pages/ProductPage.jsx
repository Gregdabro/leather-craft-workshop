import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productLoadingSelector, productSelector } from '../store/productSlice'
import PageHeader from '../components/PageHeader/PageHeader'
import Product from '../components/Product/Product'

const ProductPage = () => {
  const { id } = useParams()
  const isLoading = useSelector(productLoadingSelector())
  const product = useSelector(productSelector(id))

  if (isLoading) {
    return <Navigate to="/product" />
  }

  return (
    <>
      <PageHeader
        title="the bakers bridle"
        subTitle="Leather Belt"
        isBackButton={true}
      />
      <Product />
    </>
  )
}

export default ProductPage
