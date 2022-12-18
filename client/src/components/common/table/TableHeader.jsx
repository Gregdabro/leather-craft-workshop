import { AiFillCaretDown, AiOutlineCaretDown } from 'react-icons/ai'

const TableHeader = ({ onSort, selectedSort, columns }) => {
  console.log('TableHeader columns', columns)
  // console.log('selectedSort', selectedSort)
  // const handleSort = (item) => {
  //   if (selectedSort.path === item) {
  //     onSort({
  //       ...selectedSort,
  //       order: selectedSort.order === 'asc' ? 'desc' : 'asc'
  //     })
  //   } else {
  //     onSort({ path: item, order: 'asc' })
  //   }
  // }
  // const renderSortArrow = (selectedSort, currentPath) => {
  //   if (selectedSort.path === currentPath) {
  //     if (selectedSort.order === 'asc') {
  //       return <AiFillCaretDown/>
  //     } else {
  //       return <AiOutlineCaretDown/>
  //     }
  //   }
  //   return null
  // }

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            // onClick={
            //   columns[column].path
            //     ? () => handleSort(columns[column].path)
            //     : undefined
            // }
            {...{ role: columns[column].path && 'button' }}
            scope="col"
          >
            {columns[column].name}
            {/*{renderSortArrow(selectedSort, columns[column].path)}*/}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
