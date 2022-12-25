import { useSelector } from 'react-redux'
import {
  getColorsByIds,
  isLoadingColorSelector
} from '../../../store/colorSlice'
import Color from './Color'
const ColorList = ({ colors }) => {
  const isLoading = useSelector(isLoadingColorSelector())
  console.log('isLoading', isLoading)
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
        <Color key={color._id} {...color} />
      ))}
    </div>
  )
}

export default ColorList
