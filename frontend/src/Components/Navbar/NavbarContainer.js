import React from 'react'
import styled from 'styled-components'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './Navbar.css'
import {Link} from 'react-router-dom'

function NavbarContainer() {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Link to='/'>
                    <Navbar.Brand  className='bold-text'>MedicoAid</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-5">
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Application info</NavDropdown.Item>
                    </NavDropdown> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarContainer

const Container = styled.div`
    background-color: #9390FF;
    color: #9390FF;
`