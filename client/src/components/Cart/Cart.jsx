import styles from './Cart.module.scss'
import Button from '../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  cartItemsSelector,
  cartTotalSelector,
  clearCart,
  createOrder
} from '../../store/cartSlice'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { clearMessage } from '../../store/messageSlice'

const Cart = () => {
  const cartItems = useSelector(cartItemsSelector())
  const total = useSelector(cartTotalSelector())
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [successful, setSuccessful] = useState(false)
  const { message } = useSelector((state) => state.message)

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleCreateOrder = () => {
    const order = {
      products: [
        ...cartItems.map(({ _id: productId, ...rest }) => ({
          productId,
          ...rest
        }))
      ],
      total
    }
    dispatch(createOrder({ payload: { ...order } }))
      .unwrap()
      .then(() => {
        clearCart()
        navigate('/')
        dispatch(clearCart())
      })
      .catch(() => {
        setSuccessful(false)
      })
      .finally(() => {})
  }

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  return (
    <div className={styles.cart}>
      {!successful && (
        <>
          <div className={styles.top}>
            {cartItems.length !== 0 ? (
              <h1>Products in your cart</h1>
            ) : (
              <h1>В корзине нет товара</h1>
            )}
          </div>
          <div className={styles.middle}>
            {cartItems?.map((item) => (
              <CartItem key={item._id} {...item} />
            ))}
            <div className={styles.total}>
              <p>Total</p>
              <span>${total}</span>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.wrapper}>
              <button onClick={() => handleClearCart()}>Remove Cart</button>
              <Button onClick={() => handleCreateOrder()}>
                proceed to checkout
              </Button>
            </div>
          </div>
        </>
      )}
      {message && <p>{message}</p>}
    </div>

    // <div className={styles.cart}>
    //   <div className={styles.cartContainer}>
    //     {cartItems.length === 0 ? (
    //       <div className={styles.cartEmpty}>
    //         <p>Your cart is currently empty</p>
    //         <div className={styles.startShopping}>
    //           <Link to="/">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="20"
    //               height="20"
    //               fill="currentColor"
    //               className="bi bi-arrow-left"
    //               viewBox="0 0 16 16"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
    //               />
    //             </svg>
    //             <span>Start Shopping</span>
    //           </Link>
    //         </div>
    //       </div>
    //     ) : (
    //       <div>
    //         <div className={styles.titles}>
    //           <h3 className={styles.productTitle}>Product</h3>
    //           <h3 className={styles.price}>Price</h3>
    //           <h3 className={styles.quantity}>Quantity</h3>
    //           <h3 className={styles.total}>Total</h3>
    //         </div>
    //         <>
    //           {cartItems &&
    //             cartItems.map((cartItem) => (
    //               <div className={styles.cartItem} key={cartItem._id}>
    //                 <div className={styles.cartProduct}>
    //                   <img src={IMAGES[cartItem.image]} alt={cartItem.name} />
    //                   <div>
    //                     <h3>{cartItem.name}</h3>
    //                     <p>{cartItem.description}</p>
    //                     <button onClick={() => handleRemoveFromCart(cartItem)}>
    //                       Remove
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <div className={styles.cartProductPrice}>
    //                   ${cartItem.price * cartItem.quantity}
    //                 </div>
    //                 <Quantity>
    //                   <button onClick={() => handleQuantity('decrement')}>-</button>
    //                   <span>{cartItem.quantity}</span>
    //                   <button onClick={() => handleQuantity('increment')}>+</button>
    //                 </Quantity>
    //                 <div className={styles.cartProductTotalPrice}>
    //                   ${cartItem.price * cartItem.quantity}
    //                 </div>
    //               </div>
    //             ))}
    //         </>
    //         <div className={styles.cartSummary}>
    //           <button
    //             className={styles.clearBtn}
    //             onClick={() => handleClearCart()}
    //           >
    //             Clear Cart
    //           </button>
    //           <div className={styles.cartCheckout}>
    //             <div className={styles.subtotal}>
    //               <span>Subtotal</span>
    //               <span className={styles.amount}>
    //                 {cartItems.cartTotalAmount}
    //               </span>
    //             </div>
    //             <p>Taxes and shipping calculated at checkout</p>
    //             <button>Check out</button>
    //             <div className={styles.continueShopping}>
    //               <Link to="/">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="20"
    //                   height="20"
    //                   fill="currentColor"
    //                   className="bi bi-arrow-left"
    //                   viewBox="0 0 16 16"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
    //                   />
    //                 </svg>
    //                 <span>Continue Shopping</span>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   {/*<div className={styles.top}>*/}
    //   {/*  <h1>Products in your cart</h1>*/}
    //   {/*</div>*/}
    //   {/*<>*/}
    //   {/*  {cartItems?.length === 0*/}
    //   {/*    ? <p>В вашей корзине пусто</p>*/}
    //   {/*    : (*/}
    //   {/*      <>*/}
    //   {/*        <div className={styles.middle}>*/}
    //   {/*          {cartItems?.map((item) => (*/}
    //   {/*            <div key={item._id} className={styles.item}>*/}
    //   {/*              <div className={styles.itemInfo}>*/}
    //   {/*                <img src={IMAGES[item.image]} />*/}
    //   {/*                <div className={styles.details}>*/}
    //   {/*                  <h2>{item.name}</h2>*/}
    //   {/*                  <p className={styles.size}>*/}
    //   {/*                    Size<span>70cm</span>*/}
    //   {/*                  </p>*/}
    //   {/*                  <p className={styles.color}>{item.category}</p>*/}
    //   {/*                </div>*/}
    //   {/*              </div>*/}
    //   {/*              <Quantity />*/}
    //   {/*              <AiOutlineDelete className={styles.delete} />*/}
    //   {/*            </div>*/}
    //   {/*          ))}*/}
    //   {/*          <div className={styles.total}>*/}
    //   {/*            <p>subtotal</p>*/}
    //   {/*            <span>$360</span>*/}
    //   {/*          </div>*/}
    //   {/*        </div>*/}
    //   {/*        <div className={styles.bottom}>*/}
    //   {/*          <Button>proceed to checkout</Button>*/}
    //   {/*        </div>*/}
    //   {/*      </>*/}
    //   {/*    )*/}
    //   {/*  }*/}
    //   {/*</>*/}
    // </div>
  )
}

export default Cart
