import Table from '../common/table'
import ActionButton from '../common/ActionButton/ActionButton'
import Category from '../Category/Category'
import ColorList from '../Colors/ColorList'
import styles from './Admin.module.scss'
import AdminNavbar from './AdminNavbar'

const CommonTable = ({
  products,
  onSort,
  selectedSort,
  removeProduct,
  ...rest
}) => {
  const columns = {
    name: {
      path: 'name',
      name: 'User Name'
    },
    email: {
      path: 'email',
      name: 'Email'
    },
    colors: {
      name: 'Colors',
      component: (product) => <ColorList colors={product.colors} />
    },
    professions: {
      name: 'Category',
      component: (product) => <Category id={product.category} />
    },
    remove: {
      path: 'remove',
      name: 'Delete',
      component: (product) => (
        <ActionButton onClick={() => removeProduct(product._id)} />
      )
    }
  }
  return (
    <>
      <div className={styles.main}>
        <AdminNavbar title="Order List" isBackButton={true} />
        <div className={styles.mainSection}>
          <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={products}
          />
        </div>
      </div>
    </>
  )
}

export default CommonTable
