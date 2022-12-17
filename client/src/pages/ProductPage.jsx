import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  productLoadingStatusSelector,
  productSelector
} from '../store/productSlice'
import PageHeader from '../components/PageHeader/PageHeader'
import Product from '../components/Product/Product'

const ProductPage = () => {
  const { id } = useParams()
  const loadingStatus = useSelector(productLoadingStatusSelector)
  const product = useSelector(productSelector(id))

  if (loadingStatus !== 'idle' && loadingStatus !== 'pending' && !product) {
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
