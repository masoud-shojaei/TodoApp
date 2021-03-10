import {createSlice} from '@reduxjs/toolkit'


export const statusFilters = {
  All: 'all',
  Active: 'active',
  Complete: 'complete'
}


export const availableColors = ['green', 'white', 'red']


const initialState = {
  status: statusFilters.All,
  colors: []
}


/* 
*  FILTERS REDUCER
*/
const filterSlice = createSlice({
  name: 'filters',
  initialState, 
  reducers: {
    changedStatusFilter(state, action) {
      state.status = action.payload
    },
    changedColorFilter:{
      reducer(state, action) {
        const {colors} = state   
        const {color, changeType} = action.payload
  
        switch (changeType) {
          case 'add':
            colors.push(color)
            break
       
          case 'remove':
            state.colors =  colors.filter(c => c !== color)
            break
        }
      },
      prepare(color, changeType) {
        return {
          payload: {color , changeType}
        }
      }
    }
  }
})

export const {
  changedStatusFilter,
  changedColorFilter
} = filterSlice.actions

export default filterSlice.reducer


/* 
*  SELECTED FACTORY
*/
export const seletedStatusFilter = state => state.filters.status
export const selectedColorsFilter = state => state.filters.colors