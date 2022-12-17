import styles from './ProductsTable.module.scss'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineSetting, AiOutlineDelete } from 'react-icons/ai'

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 230 },
  {
    field: 'productName',
    headerName: 'Title',
    width: 230
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 200
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 120
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 120
  },
  {
    field: 'colors',
    headerName: 'Colors',
    width: 120
  }
]
export const userRows = [
  {
    id: '638f3ef5e524e27d239b1ccd17',
    productName: 'Snow',
    description: 'Some description text',
    category: 'Belts',
    colors: 'red, blue, gray',
    image: 'bradley_bridle'
  },
  {
    id: '638f3ef5e524e27d239b1ccd16',
    productName: 'Snow',
    description: 'Some description text',
    category: 'Belts',
    colors: 'red, blue, gray',
    image: 'bradley_bridle'
  },
  {
    id: '638f3ef5e524e27d239b1ccd15',
    productName: 'Snow',
    description: 'Some description text',
    category: 'Belts',
    colors: 'red, blue, gray',
    image: 'bradley_bridle'
  },
  {
    id: '638f3ef5e524e27d239b1ccd14',
    productName: 'Snow',
    description: 'Some description text',
    category: 'Belts',
    colors: 'red, blue, gray',
    image: 'bradley_bridle'
  },
  {
    id: '638f3ef5e524e27d239b1ccd13',
    productName: 'Snow',
    description: 'Some description text',
    category: 'Belts',
    colors: 'red, blue, gray',
    image: 'bradley_bridle'
  },
  {
    id: '638f3ef5e524e27d239b1ccd12',
    productName: 'Snow',
    description: 'Some description text',
    category: 'Belts',
    colors: 'red, blue, gray',
    image: 'bradley_bridle'
  },
  {
    id: '638f3ef5e524e27d239b1ccd11',
    productName: 'Snow',
    description: 'Some description text',
    category: 'Belts',
    colors: 'red, blue, gray',
    image: 'bradley_bridle'
  }
]

const ProductsTable = () => {
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
        <h2>Products</h2>
        <Link to="/admin/add-product" className={styles.link}>
          Add New Product
        </Link>
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

export default ProductsTable
