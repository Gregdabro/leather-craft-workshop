import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({ onSort, selectedSort, columns, data, children }) => {
  console.log('Table data', data)
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  )
}

export default Table
