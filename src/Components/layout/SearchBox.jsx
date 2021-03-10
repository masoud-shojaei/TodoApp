function SearchBox() {
  return (
      <li className="searchBox-afterHover ">
        <input 
          type="text" 
          className="searchBox-content"
          id="searchBox-content"
          placeholder="Search between tasks ..."  
        />
      </li>
  )
}

export default SearchBox
