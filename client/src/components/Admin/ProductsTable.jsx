import styles from './Admin.module.scss'
import IMAGES from '../../constants/images'
import { AiOutlineDelete, AiOutlineSetting } from 'react-icons/ai'
import AdminNavbar from './AdminNavbar'
const ProductsTable = () => {
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
              <tr>
                <td>123435435</td>
                <td>
                  <img src={IMAGES.garrison_bridle} />
                </td>
                <td>bridlay barlay</td>
                <td>somthing description</td>
                <td>belts</td>
                <td>red, yellow, blue</td>
                <td>340</td>
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
              <tr>
                <td>123435435</td>
                <td>
                  <img src={IMAGES.garrison_bridle} />
                </td>
                <td>bridlay barlay</td>
                <td>somthing description</td>
                <td>belts</td>
                <td>red, yellow, blue</td>
                <td>340</td>
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
              <tr>
                <td>123435435</td>
                <td>
                  <img src={IMAGES.garrison_bridle} />
                </td>
                <td>bridlay barlay</td>
                <td>somthing description</td>
                <td>belts</td>
                <td>red, yellow, blue</td>
                <td>340</td>
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
              <tr>
                <td>123435435</td>
                <td>
                  <img src={IMAGES.garrison_bridle} />
                </td>
                <td>bridlay barlay</td>
                <td>somthing description</td>
                <td>belts</td>
                <td>red, yellow, blue</td>
                <td>340</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductsTable
