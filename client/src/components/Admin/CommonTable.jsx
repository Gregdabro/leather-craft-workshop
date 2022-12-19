import Table from '../common/table'
import styles from './Admin.module.scss'
import AdminNavbar from './AdminNavbar'
import Category from '../Category/Category'
import ActionButton from '../common/ActionButton/ActionButton'
import ColorList from '../Colors/ColorList'
import Image from '../UI/Image/Image'

const CommonTable = ({ products, onDelete, ...rest }) => {
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
      component: (product) => <ColorList colorsIds={product.colors} />
    },
    actions: {
      name: 'Actions',
      component: (product) => (
        <>
          <ActionButton action="UPDATE" id={product._id} />
          <ActionButton action="REMOVE" onClick={() => onDelete(product._id)} />
        </>
      )
    }
  }
  return (
    <>
      <div className={styles.main}>
        <AdminNavbar
          title="Products"
          path="/admin/add-product"
          label="new product"
        />
        <div className={styles.mainSection}>
          <Table columns={columns} data={products} />
        </div>
      </div>
    </>
  )
}

export default CommonTable
