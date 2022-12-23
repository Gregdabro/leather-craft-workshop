import styles from './Admin.module.scss'
import { Link } from 'react-router-dom'
import { AiOutlineShop } from 'react-icons/ai'
import Sidebar from './Sidebar'

const DashBoard = ({ children }) => {
  return (
    <div className={styles.dashBoard}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default DashBoard
