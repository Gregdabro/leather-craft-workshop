import { useSelector } from 'react-redux'
import {
  getColorsByIds,
  isLoadingColorSelector
} from '../../../store/colorSlice'
import ProductColor from './ProductColor'
const ProductColorList = ({ colors }) => {
  const isLoading = useSelector(isLoadingColorSelector())
  const colorList = useSelector(getColorsByIds(colors))
  if (isLoading) return 'Loading ...'

  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {colorList.map((color) => (
        <ProductColor key={color._id} {...color} />
      ))}
    </div>
  )
}

export default ProductColorList
