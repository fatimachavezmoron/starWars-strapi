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
    <Navbar color="light" light expand='md' style={{ padding:0 }}>
      <NavbarBrand href="/" style={{ background:'black' }}>
        <img src={StarLogo} alt='starwarsLogo' width={80} style={{ padding:0 }}/>
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
              Gallery & Story
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ships" style={{ color: 'white' }}>
              The Ships
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/upload" style={{ color: 'white' }} >
              Upload 
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