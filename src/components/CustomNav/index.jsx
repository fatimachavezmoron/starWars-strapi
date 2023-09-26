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
    <Navbar color="light" light expand='md'>
      <NavbarBrand href="/" className="me-auto">
        <img src={StarLogo} alt='starwarsLogo' width={80}/>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="me-2" />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
        <NavItem>
            <NavLink href="/">
              Home
            </NavLink>
          </NavItem>
        <NavItem>
            <NavLink href="/gallery">
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/logout">
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