import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <li className="navbar-items">
      <span className="item"><Link to='/' className="text-dark link">TODOAPP</Link></span>
      <span className="item"><Link to='/blog' className="text-dark link">BLOG</Link></span>
    </li>
  )
}

export default Navbar
