import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  productLoadingStatusSelector,
  productSelector
} from '../store/productSlice'
import PageHeader from '../components/PageHeader/PageHeader'
import React from 'react'

const ProductPage = () => {
  const { id } = useParams()
  const loadingStatus = useSelector(productLoadingStatusSelector)
  const product = useSelector(productSelector(id))

  if (loadingStatus !== 'idle' && loadingStatus !== 'pending' && !product) {
    return <Navigate to="/product" />
  }

  return (
    <>
      <PageHeader title='the bakers bridle' subTitle="Leather Belt"/>

      <div
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        ProductPage
      </div>
    </>
  )
}

export default ProductPage
