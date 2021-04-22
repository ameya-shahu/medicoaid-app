import React from 'react'
import styled from 'styled-components'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'

function NavbarContainer() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }
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
                        <NavDropdown.Item onClick={(e) => handleLogout(e)}>Sign Out</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>{user.name}</NavDropdown.Item>
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