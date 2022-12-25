import styles from './Product.module.scss'
import IMAGES from '../../constants/images'
import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import { HiOutlineHeart } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { productSelector } from '../../store/productSlice'
import { useParams } from 'react-router-dom'
import { addProduct } from '../../store/cartSlice'
import ColorList from '../UI/ColorList/ColorList'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Product = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)
  const product = useSelector(productSelector(productId))
  const [selectedImg, setSelectedImg] = useState(0)
  const images = [IMAGES.damask_bridle, IMAGES.berkley_bridle]
  const handleAddToCart = (product) => {
    dispatch(addProduct({ ...product, amount }))
    setAmount(1)
  }

  const handleQuantity = (type) => {
    if (type === 'decrement') {
      amount > 1 && setAmount(amount - 1)
    } else {
      setAmount(amount + 1)
    }
  }

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
        <ColorList colors={product.colors} />
        <div className={styles.amount}>
          <button onClick={() => handleQuantity('decrement')}>
            <AiOutlineMinus />
          </button>
          <span>{amount}</span>
          <button onClick={() => handleQuantity('increment')}>
            <AiOutlinePlus />
          </button>
        </div>
        <Button onClick={() => handleAddToCart(product)}>add to cart</Button>
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
