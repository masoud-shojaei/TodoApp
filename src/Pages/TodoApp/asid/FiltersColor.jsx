import { useDispatch, useSelector } from 'react-redux'
import {availableColors, selectedColorsFilter, changedColorFilter} from './FiltersSlice'

function FiltersColor() {
  const dispatch = useDispatch()
  const colors = useSelector(selectedColorsFilter)

 /* 
 *  HANDLE CLICK FUNCTION
 */
  const handleChangeColor = (color, changeType) => {
    dispatch(changedColorFilter(color, changeType))
  }

  /* 
  *  RENDERED COLORS FILTER ITEM FUNCTIONALITY
  */
  const renderedColorItem = availableColors.map(color => {
      const checked = colors.includes(color)
      const selectedColorItem = checked ? 'selected':''
      const changeType = checked ? 'remove':'add'

      return (
        <button 
          key={color}
          className={`item btn btn-${color} ${selectedColorItem}`}
          onClick={() => handleChangeColor(color, changeType)}
        >
          {color}
        </button>
      )
      
  })


  return (
    <div className="todos-filter-colors">
      <h4 className="text-light">Filter By Colors</h4>
      {renderedColorItem}
    </div>
  )
}

export default FiltersColor
