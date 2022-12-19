import CommonTable from './CommonTable'
import { useSelector } from 'react-redux'
import {
  productListSelector,
  productLoadingSelector
} from '../../store/productSlice'
const CommonList = () => {
  const productsList = useSelector(productListSelector())
  const isProductsLoading = useSelector(productLoadingSelector())

  const handleDelete = (id) => {
    console.log('id', id)
  }

  if (!isProductsLoading) {
    return (
      <>
        <CommonTable products={productsList} onDelete={handleDelete} />
      </>
    )
  }
  return 'Loading...'
}

export default CommonList
