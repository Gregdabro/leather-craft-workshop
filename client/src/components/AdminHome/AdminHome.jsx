import styles from './AdminHome.module.scss'
import BackButton from '../BackButton/BackButton'
const UserTable = () => {
  return (
    <div className={styles.content}>
      <div className={styles.sectionTop}>
        <h2>Admin Main Screen</h2>
        <BackButton>Go Back</BackButton>
      </div>
      <div className={styles.main}>
        Admin Main Screen
      </div>
    </div>
  )
}

export default UserTable
