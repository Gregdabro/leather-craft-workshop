import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({ columns, data, children }) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...{ columns }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  )
}

export default Table
