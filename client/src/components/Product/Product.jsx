import styles from './Product.module.scss'
import IMAGES from '../../constants/images'
import { useState } from 'react'
import Button from '../Button/Button'
import { HiOutlineHeart } from 'react-icons/hi2'
import Quantity from '../Quantity/Quantity'

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    // 'https://images.pexels.com/photos/14610789/pexels-photo-14610789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // 'https://images.pexels.com/photos/14610789/pexels-photo-14610789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    IMAGES.damask_bridle,
    IMAGES.berkley_bridle
  ]

  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.mainImg}>
          <img src={images[selectedImg]} />
        </div>
        <div className={styles.images}>
          <img src={images[0]} onClick={() => setSelectedImg(0)} />
          <img src={images[1]} onClick={() => setSelectedImg(1)} />
          <img src={images[0]} onClick={() => setSelectedImg(0)} />
          <img src={images[1]} onClick={() => setSelectedImg(1)} />
        </div>
      </div>
      <div className={styles.right}>
        <h1>bakers bridle</h1>
        <span className={styles.price}>$290</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          amet asperiores enim et, excepturi fugiat harum impedit laboriosam,
          magni mollitia nesciunt non odit perferendis quas quisquam quos
          repellat reprehenderit similique.
        </p>

        <Quantity />
        <Button>add to cart</Button>
        <div className={styles.links}>
          <div className={styles.item}>
            <HiOutlineHeart />
            ADD TO WISH LIST
          </div>
          <div className={styles.item}>POPULAR</div>
        </div>
        <div className={styles.info}>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: Shirt, Popular, men</span>
        </div>
        <hr />
        <div className={styles.info}>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
