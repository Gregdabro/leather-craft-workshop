import styles from './Cart.module.scss'
import IMAGES from '../../constants/images'
import { AiOutlineDelete } from 'react-icons/ai'
import Button from '../Button/Button'
import Quantity from '../Quantity/Quantity'

const Cart = () => {
  const data = [
    {
      id: 1,
      img: IMAGES.berkley_bridle,
      img2: IMAGES.garrison_bridle,
      title: 'garrison bridle',
      isNew: true,
      price: 290
    },
    {
      id: 2,
      img: IMAGES.aspley_bridle,
      img2: IMAGES.damask_bridle,
      title: 'garrison bridle',
      isNew: true,
      price: 390
    }
  ]

  return (
    <div className={styles.cart}>
      <div className={styles.top}>
        <h1>Products in your cart</h1>
      </div>
      <div className={styles.middle}>
        {data?.map(item => (
          <div className={styles.item} key={item.id}>
            <div className={styles.itemInfo}>
              <img src={item.img}/>
              <div className={styles.details}>
                <h2>{item.title}</h2>
                <p className={styles.size}>Size<span>70cm</span></p>
                <p className={styles.color}>color</p>
              </div>
            </div>
            <Quantity/>
            <AiOutlineDelete className={styles.delete}/>
          </div>
        ))}
        <div className={styles.total}>
          <p>subtotal</p>
          <span>$360</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <Button>proceed to checkout</Button>
      </div>
    </div>
  )
}

export default Cart
