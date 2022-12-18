import Cart from '../components/Cart/Cart'
import PageHeader from '../components/PageHeader/PageHeader'

const CartPage = () => {
  return (
    <>
      <PageHeader title="cart" subTitle="Leather Belt" isBackButton={true} />
      <Cart />
    </>
  )
}

export default CartPage
