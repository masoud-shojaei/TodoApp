import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewTodoToClient } from "./TodosSlice"
import Loader from '../../../Components/loader/Loader'


function TodosHeader() {
  const [todoBody, setTodoBody] = useState('')
  const [status, setStatus] = useState('idle')
  const dispatch = useDispatch()

  /* 
  *  HANDLE FUNCTIONS
  */
  const handleChange = (e) => setTodoBody(e.target.value)
  const handleEnterKeydown = async (e) => {
    const trimTask = todoBody.trim()
    if (e.which === 13 && trimTask) {

      setStatus('loading')
      await dispatch(addNewTodoToClient(todoBody))
      setStatus('idle')
      setTodoBody('')

    }
  }


  /* 
  *  LOADER CHECKER
  */
  const isLoading = status === 'loading'
  const loader = isLoading ? <Loader type='small-loader'/> : null


  return (
    <div className="todos-textArea d-flex">
      <input 
        type="text" 
        placeholder='write your tasks here'
        value={todoBody}
        onChange={handleChange}
        onKeyDown={handleEnterKeydown}
        disabled={isLoading}
      />
      {loader}
    </div>
  )

}

export default TodosHeader
