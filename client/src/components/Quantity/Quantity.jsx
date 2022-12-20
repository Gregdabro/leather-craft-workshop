import styles from './Quantity.module.scss'
import { useState } from 'react'

const Quantity = ({ children }) => {
  return <div className={styles.quantity}>{children}</div>
}

export default Quantity
