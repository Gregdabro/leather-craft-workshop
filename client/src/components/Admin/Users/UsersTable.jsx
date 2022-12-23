import Category from '../../Category/Category'
import ProductColorList from '../../UI/ProductColorList/ProductColorList'
import ActionButton from '../../common/ActionButton/ActionButton'
import Table from '../../common/table/Table'
import Image from '../../UI/Image/Image'

const UsersTable = ({ products, onDelete, ...rest }) => {
  const columns = {
    id: {
      path: '_id',
      name: 'ID'
    },
    image: {
      name: 'Image',
      component: (product) => <Image path={product.image} />
    },
    name: {
      path: 'name',
      name: 'User Name'
    },
    description: {
      path: 'description',
      name: 'Description'
    },
    category: {
      name: 'Category',
      component: (product) => <Category id={product.category} />
    },
    colors: {
      name: 'Colors',
      component: (product) => <ProductColorList colors={product.colors} />
    },
    actions: {
      name: '#',
      component: (product) => (
        <div style={{ display: 'flex', gap: 10, flexWrap: 'nowrap' }}>
          <ActionButton action="UPDATE" id={product._id} />
          <ActionButton action="REMOVE" onClick={() => onDelete(product._id)} />
        </div>
      )
    }
  }
  return (
    <>
      <Table columns={columns} data={products} />
    </>
  )
}

export default UsersTable
