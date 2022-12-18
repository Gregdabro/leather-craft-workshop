import { useState } from 'react'
import CommonTable from './CommonTable'
import { useSelector } from 'react-redux'
import {
  productListSelector,
  productLoadingStatusSelector
} from '../../store/productSlice'

const CommonList = () => {
  const products = useSelector(productListSelector())
  console.log('CommonList products', products)
  const isLoading = useSelector(productLoadingStatusSelector())
  console.log('CommonList isLoading', isLoading)
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })

  const handleSort = (item) => {
    setSortBy(item)
  }

  if (isLoading === 'success') {
    return (
      <CommonTable
        products={products}
        onSort={handleSort}
        selectedSort={sortBy}
      />
    )
  }
  return 'Loading...'
}

export default CommonList
