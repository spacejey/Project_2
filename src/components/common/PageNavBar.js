import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../images/harvard-art-museums-full.jpeg'

const PageNavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand to="/" as={Link} className='logo'><img src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/gallery" as={Link}>Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar 