import styles from './Admin.module.scss'
import IMAGES from '../../constants/images'
import { AiOutlineDelete, AiOutlineSetting } from 'react-icons/ai'
import AdminNavbar from './AdminNavbar'
import { useSelector } from 'react-redux'
import { productListSelector } from '../../store/productSlice'
const ProductsTable = () => {
  const products = useSelector(productListSelector())
  return (
    <>
      <div className={styles.main}>
        <AdminNavbar
          title="product List"
          label="new product"
          path="/admin/add-product"
        />
        <div className={styles.mainSection}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>image</th>
                <th>product name</th>
                <th>description</th>
                <th>category</th>
                <th>colors</th>
                <th>price</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {products
                ? products.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>
                        <img src={IMAGES[item.image]} />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.category}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <div className={styles.buttons}>
                          <button>
                            <AiOutlineSetting />
                          </button>
                          <button>
                            <AiOutlineDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : 'Loading...'}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductsTable
