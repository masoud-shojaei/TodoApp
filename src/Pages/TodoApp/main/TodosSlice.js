import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {statusFilters} from '../asid/FiltersSlice'
import {client} from '../../../services/Client/client'


const initialState = {
  entities:{},
  status: 'idle'
}


/** 
 *  THUNK FUNCTION FOR FETCH TODOS FROM MOCK-API
 */
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
   async () => {
      return await client.get('todos')
    }
)


/** 
 *  TODOS REDUCER
 */
const todosSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    todoAdded(state, action) {
      const todo = action.payload
      state.entities[todo.id] = todo
    },

    todoComplete(state, action) {
      const todoId = action.payload
      const todoToggle = state.entities[todoId]
      state.entities[todoId].complete = !todoToggle.complete
    },

    todoDelete(state, action) {
      const todoIdDelete = action.payload
      delete state.entities[todoIdDelete]
    },

    markAll(state, action) {
      Object.values(state.entities).forEach(todo => {
        todo.complete = true
      })
    },

    clearComplete(state, action) {
      Object.values(state.entities).forEach(todo => {
        if(todo.complete) {
          delete state.entities[todo.id]
        }
      })
    },
    
    colorChanged: {
      reducer(state, action) {
        const {color, id} = action.payload
        state.entities[id].color = color
      },
      prepare(id, color) {
        return {
          payload:{id,color}
        }
      }
    }
  },

  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchTodos.fulfilled]: (state, action) => {
      const todos = action.payload
      const newEntities = {}
      todos.forEach(todo => {
        newEntities[todo.id] = todo
      })
      state.entities = newEntities
      state.status = 'idle'
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'error'
    }
  }

})

export const {
  todoAdded,
  todoComplete,
  todoDelete,
  markAll,
  clearComplete,
  colorChanged
} = todosSlice.actions

export default todosSlice.reducer


/** 
 *  THUNK FUNCTION FOR ADD TODO TO MOCK-API
 */
export const addNewTodoToClient = createAsyncThunk(
  'todos/todosAddNewTodo',
  async (todoBody, thunkApi) => {
    const initTodo = {
      todoBody,
      complete: false
    }
    const todo = await client.post('todos', initTodo)
    thunkApi.dispatch(todoAdded(todo))
  }
)


/** 
 *  SELECTED FACTORY AND FILTER AVAILABALE TODOS FUNCTIONALITY
 */
export const selectTodoEntities = state =>  state.todos.entities
export const selectTodosIds = state => Object.keys(state.todos.entities)

export const selectTodos = createSelector(
  selectTodoEntities,
  (todoEntities) => Object.values(todoEntities)
)

const slectedFilterTodos = createSelector(
  selectTodos,
  (state) => state.filters,
  (todos, filters) => {
    const {status, colors} = filters

    const showAll = status === statusFilters.All
    if(showAll && colors.length === 0) {
      return todos
    }
  
    const showComplete = status === statusFilters.Complete
      return todos.filter(todo => {
      const statusFilter = showAll || todo.complete === showComplete
      const colorsFilter = colors.length === 0 || colors.includes(todo.color)
  
      return statusFilter && colorsFilter
    })
  }
)

export const slectedFilterTodoIds = createSelector(
  slectedFilterTodos,
  (filterTodos) => filterTodos.map(todo => todo.id)
)



