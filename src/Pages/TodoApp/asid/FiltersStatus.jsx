import {statusFilters, seletedStatusFilter, changedStatusFilter} from './FiltersSlice'
import {useDispatch, useSelector} from 'react-redux'


function FiltersStatus() {
  const status = useSelector(seletedStatusFilter)
  const dispatch = useDispatch()

  
  /* 
  *  HANDLE CLICK FUNCTION
  */
  const handleChangeStatus = (status) => dispatch(changedStatusFilter(status))


  /* 
  *  RENDERED STATUS FILTER ITEM FUNCTIONALITY
  */
  const renderedFiltersItem = Object.keys(statusFilters).map(key => {
      const statusValue = statusFilters[key]
      const selectedStatus = statusValue === status ? 'selected':''

      return (
        <button 
          key={statusValue}
          className={`item btn btn-primary ${selectedStatus}`}
          onClick={() => handleChangeStatus(statusValue)}
        >
          {key}
        </button>
      )

  })

  
  return (
    <div className="todos-filter-status">
      <h4 className="text-light">Filter By Status</h4>
      {renderedFiltersItem}
    </div>
  )
}

export default FiltersStatus
