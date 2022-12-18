import styles from './Admin.module.scss'
import AdminNavbar from './AdminNavbar'
const UsersTable = () => {
  return (
    <>
      <div className={styles.main}>
        <AdminNavbar title="User List" isBackButton={true}/>
        <div className={styles.mainSection}>
          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>email</th>
              <th>role</th>
              <th>age</th>
              <th>sex</th>
              <th>createdAt</th>
              <th>updatedAt</th>

            </tr>
            </thead>
            <tbody>
            <tr>
              <td>123435435</td>
              <td>Geg Dabro</td>
              <td>gregdabro@gmail.com</td>
              <td>USER</td>
              <td>36</td>
              <td>male</td>
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
