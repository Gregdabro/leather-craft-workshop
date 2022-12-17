import styles from './AddProduct.module.scss'
import Button from '../Button/Button'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useState } from 'react'
import BackButton from '../BackButton/BackButton'

const AddProduct = () => {
  const [file, setFile] = useState('')

  return (
    <div className={styles.content}>
      <div className={styles.sectionTop}>
        <h2>Products</h2>
        <BackButton>Go back</BackButton>
      </div>
      <div className={styles.newProduct}>
        <div className={styles.top}>
          <h3>Add new Product</h3>
        </div>
        <div className={styles.bottom}>
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
