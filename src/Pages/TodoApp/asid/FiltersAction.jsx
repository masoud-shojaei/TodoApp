import { useDispatch } from "react-redux"
import { clearComplete, markAll } from "../main/TodosSlice"

function FiltersAction() {
  const dispatch = useDispatch()

/** 
 *  HANDLE CLICK FUNCTIONS
 */
  const handleMarkAll = () => dispatch(markAll())
  const handleClearComplete = () => dispatch(clearComplete())

  return (
    <div className="todos-filter-buttons">
      <h4 className="text-light">Actions</h4>
      <button 
        onClick={handleMarkAll}
        className="item btn btn-primary"
      >
        mark all
      </button>
      <button 
        onClick={handleClearComplete} 
        className="item btn btn-primary"
      >
        clear complete
      </button>
    </div>
  )
}

export default FiltersAction
