import Cart from '../components/Cart/Cart'
import PageHeader from '../components/PageHeader/PageHeader'
import React from 'react'

const CartPage = () => {
  return (
    <>
      <PageHeader title="cart" subTitle="Leather Belt" isBackButton={true} />
      <Cart />
    </>
  )
}

export default CartPage
