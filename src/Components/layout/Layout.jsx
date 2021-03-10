import { useState } from 'react'
import Navbar from './Navbar'
import SearchBox from './SearchBox'
import SearchBoxBtn from './SearchBoxBtn'

function Layout({children}) {
  const [status, setStatus] = useState(true)

  const handelClick = () => setStatus(!status)
  const renderedMenuItem = status ? <Navbar/> : <SearchBox/>

  return (
    <>
      <header>
        <div className="banner dark-bgc perfect-centering">
          <h2>i Todos</h2>
        </div>
        <nav className="navbar light-bgc">
          <ul className="container d-flex justify-content-between align-items-center">
            {renderedMenuItem}
            <SearchBoxBtn handelClick={handelClick}/>
          </ul>
        </nav>
      </header>
      {children}
    </>
   
  )
}

export default Layout

