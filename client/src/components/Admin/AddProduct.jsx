import styles from './Admin.module.scss'
import Button from '../Button/Button'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useState } from 'react'
import AdminNavbar from './AdminNavbar'

const AddProduct = () => {
  const [file, setFile] = useState('')
  console.log('file', file)
  return (
    <div className={styles.main}>
      <AdminNavbar title="Add new Product" isBackButton={true} />
      <div className={styles.mainSection}>
        <div className={styles.newProduct}>
          <div className={styles.left}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
            />
          </div>
          <div className={styles.right}>
            <form className={styles.form}>
              <div className={styles.formInput}>
                <label htmlFor="file">
                  Image: <AiOutlineCloudUpload className={styles.icon} />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className={styles.formInput}>
                <label>Title</label>
                <input type="text" placeholder="product name" />
              </div>
              <div className={styles.formInput}>
                <label>Description</label>
                <input type="text" placeholder="Description" />
              </div>
              <div className={styles.formInput}>
                <label>Category</label>
                <input type="text" placeholder="category" />
              </div>
              <div className={styles.formInput}>
                <label>Price</label>
                <input type="text" placeholder="100" />
              </div>
              <div className={styles.formInput}>
                <label>Colors</label>
                <input type="text" placeholder="Blue, red, gray" />
              </div>
              <Button>Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
