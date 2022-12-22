import _ from 'lodash'
import styles from './Pagination.module.scss'
import { Link } from 'react-router-dom'
const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pagesCount + 1)

  if (pagesCount === 1) return null
  return (
    <nav>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              `${styles.pageItem}` +
              (page === currentPage ? `${styles.active}` : '')
            }
          >
            <Link
              className={styles.pageLink}
              onClick={() => {
                onPageChange(page)
              }}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
