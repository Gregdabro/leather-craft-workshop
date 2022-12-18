import { useSelector } from 'react-redux'
import { categorySelector, isLoadingSelector } from '../../store/categorySlice'

const Category = ({ id }) => {
  const isLoading = useSelector(isLoadingSelector())
  const category = useSelector(categorySelector(id))
  return <>{!isLoading ? <p>{category}</p> : 'Loading...'}</>
}

export default Category
