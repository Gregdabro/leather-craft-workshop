import PageHeader from '../components/PageHeader/PageHeader'
import Product from '../components/Product/Product'

const OneProductPage = () => {
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

export default OneProductPage
