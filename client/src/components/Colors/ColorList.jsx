import { useSelector } from 'react-redux'
import { getColorsByIds, isLoadingStatusSelector } from '../../store/colorSlice'
import Color from './Color'

const ColorList = ({ colorsIds }) => {
  console.log('ColorList colorsIds', colorsIds)
  const isLoading = useSelector(isLoadingStatusSelector())
  const colorList = useSelector(getColorsByIds(colorsIds))
  return (
    <>
      {!isLoading
        ? colorList.map((item) => <Color key={item._id} {...item} />)
        : 'Loading...'}
    </>
  )
}

export default ColorList
