import { useSelector } from 'react-redux'
import { colorLoadingSelector, getColorsByIds } from '../../store/colorSlice'
import Color from './Color'

const ColorList = ({ colorsIds }) => {
  const isLoading = useSelector(colorLoadingSelector())
  const colorList = useSelector(getColorsByIds(colorsIds))
  return (
    <>
      {!isLoading
        ? colorList.map((item) => <Color key={item._id} {...item} />)
        : 'Loading...'
      }
    </>
  )
}

export default ColorList
