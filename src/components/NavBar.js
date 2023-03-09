import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/search">Search</Link>
    </nav>
  )
}

export default NavBar