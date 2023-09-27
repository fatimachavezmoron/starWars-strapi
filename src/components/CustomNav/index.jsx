import React, {useState} from 'react'
import StarLogo from '../../assets/starwars.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const CustomNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen (!isOpen)

  
  return (
    <div className='custom-nav'>
    <Navbar color="light" light expand='md' style={{ padding:0, background:'black' }}>
      <NavbarBrand href="/" className="me-auto">
        <img src={StarLogo} alt='starwarsLogo' width={80}/>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="me-2" />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/" style={{ color: 'white' }}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/gallery" style={{ color: 'white' }}>
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/galaxy" style={{ color: 'white' }}>
              The Galaxy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/logout" style={{ color: 'white' }} >
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  )
}

export default CustomNav