// import {combineReducers} from 'redux'
import TodosSlice from '../Pages/TodoApp/main/TodosSlice'
import FiltersSlice from '../Pages/TodoApp/asid/FiltersSlice'

const reducer = {
  todos: TodosSlice,
  filters: FiltersSlice
}
export default reducer