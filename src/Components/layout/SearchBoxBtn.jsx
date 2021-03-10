function SearchBoxBtn({handelClick}) {
  return (
    <li onClick={handelClick} className="searchBox">
      <div className="searchBox-shape perfect-centering">
        <i className="fas fa-search"></i>
      </div>
    </li>
  )
}

export default SearchBoxBtn
