import styles from './UserTable.module.scss'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineSetting, AiOutlineDelete } from 'react-icons/ai'
import BackButton from '../BackButton/BackButton'
export const userColumns = [
  { field: 'id', headerName: 'ID', width: 250 },
  {
    field: 'username',
    headerName: 'Name',
    width: 250
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 120
  }
]
export const userRows = [
  {
    id: '638f3ef5e524e27d239b1ccd1',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd2',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd3',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd4',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd5',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd6',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd7',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd8',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd9',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  },
  {
    id: '638f3ef5e524e27d239b1ccd10',
    username: 'Snow',
    email: '1snow@gmail.com',
    role: 'USER'
  }
]
const UserTable = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link to="/users/test">
              <AiOutlineSetting
                className={styles.viewButton}
              ></AiOutlineSetting>
            </Link>
            <AiOutlineDelete
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </AiOutlineDelete>
          </div>
        )
      }
    }
  ]

  return (
    <div className={styles.content}>
      <div className={styles.sectionTop}>
        <h2>Users</h2>
        <BackButton>Go Back</BackButton>
      </div>
      <div className={styles.dataTable}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
    </div>
  )
}

export default UserTable
