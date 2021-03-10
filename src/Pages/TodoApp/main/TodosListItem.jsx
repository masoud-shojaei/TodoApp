import { useDispatch, useSelector } from "react-redux"
import {colorChanged, todoComplete, todoDelete} from './TodosSlice'
import {availableColors} from '../asid/FiltersSlice'


function TodosListItem({id}) {
  const todo = useSelector(state => state.todos.entities[id])
  const {todoBody, color, complete} = todo
  const dispatch = useDispatch()


 /* 
  *  HANDLE FUNCTIONS
  */
  const handleCompleteTodo = () => dispatch(todoComplete(id))
  const handleDeleteTodo = () => dispatch(todoDelete(id))

  const handleChangeColor = (e) => {
    dispatch(colorChanged(id, e.target.value))
  }


 /* 
  *   RENDER COLORS OPTION
  */
  const colorsRendered = availableColors.map(c => {
    return<option key={c} value={c}>{c}</option>
  })

  return (
    <>
      <div className="item">
          <ul className="inner d-flex justify-content-between">
            <li className="todos-items-consist">
              <label className="checkbox-container">{todoBody}
                <input 
                  type="checkbox" 
                  checked={complete} 
                  onChange={handleCompleteTodo}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="d-flex align-items-center">
              <select 
                className="select-color"    
                defaultValue={color}
                style={{ color }}
                onChange={handleChangeColor}
              >
                <option value=""></option>
                {colorsRendered}
              </select>
              <span className="item-delete"><i onClick={handleDeleteTodo} className="fas fa-times"></i></span>
            </li>
          </ul>
        </div>
    </>
  )
}

export default TodosListItem
