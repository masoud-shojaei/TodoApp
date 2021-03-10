import { shallowEqual, useSelector } from 'react-redux'
import TodosListItem from './TodosListItem'
import { slectedFilterTodoIds } from './TodosSlice'
import Loader from '../../../Components/loader/Loader'


/* 
*  RENDER FILTERED TODOS
*/
const TodosListRendering = () => {
  const todosIds  = useSelector(slectedFilterTodoIds , shallowEqual)
  const renderdTodosItem = todosIds.map(id => {
    return <TodosListItem key={id} id={id}/>
  })
  return renderdTodosItem
}


function TodosList() {
  const status = useSelector(state => state.todos.status)
  const isLoading = status === 'loading'

  return (
    <div className="todos-board-content">
      <div className="todos-items">
        {isLoading ? <Loader /> : <TodosListRendering />}
      </div>
    </div>
  )
}

export default TodosList
