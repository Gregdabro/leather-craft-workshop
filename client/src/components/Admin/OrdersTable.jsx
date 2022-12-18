import styles from './Admin.module.scss'
import AdminNavbar from './AdminNavbar'
const UsersTable = () => {
  return (
    <>
      <div className={styles.main}>
        <AdminNavbar title="Order List" isBackButton={true} />
        <div className={styles.mainSection}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>userId</th>
                <th>product</th>
                <th>quantity</th>
                <th>createdAt</th>
                <th>updatedAt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123435435</td>
                <td>3434234454</td>
                <td>belt bridlea</td>
                <td>23</td>
                <td>26.08.2020</td>
                <td>16.03.2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default UsersTable
