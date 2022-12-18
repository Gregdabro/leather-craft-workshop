import styles from './Navbar.module.scss'
import IMAGES from '../../constants/images'
import {
  MAIN_ROUTE,
  PRODUCT_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  AUTH_ROUTE,
  CART_ROUTE
} from '../../utils/consts'
import { useSelector } from 'react-redux'
import useLogout from '../../hooks/useLogout'
import { isLoggedInSelector } from '../../store/authSlice'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const isLoggedIn = useSelector(isLoggedInSelector())
  const handleLogout = useLogout()

  return (
    <nav className={`${styles.navbar} container`}>
      <a href="/" className={styles.logo}>
        <img width={60} src={IMAGES.logo3} alt="logo" />
      </a>
      <div className={styles.navLinks}>
        <div>
          <a href={MAIN_ROUTE}>home</a>
        </div>
        <div>
          <a href={PRODUCT_ROUTE}>shop</a>
        </div>
        <div>
          <a href={ABOUT_ROUTE}>about</a>
        </div>
        <div>
          <NavLink
            to={CONTACT_ROUTE}
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? 'red' : 'inherit'
              }
            }}
            className={({ isActive, isPending }) => {
              return isActive ? 'active' : isPending ? 'pending' : ''
            }}
          >
            contact
          </NavLink>
        </div>
      </div>
      <div className={styles.navLinks}>
        {isLoggedIn ? (
          <div>
            <button onClick={handleLogout}>logout</button>
          </div>
        ) : (
          <div>
            <a href={AUTH_ROUTE + '/signup'}>signup</a>
          </div>
        )}
        <div>
          <a href={CART_ROUTE}>cart</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
