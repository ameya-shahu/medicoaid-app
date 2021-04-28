import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Box } from '@material-ui/core';

function NavbarContainer() {
    const user = useSelector(state => state.userLogin.userInfo);

    const HandleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("userAuthData");
        window.location.href = "/";
        window.location.reload();
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Container>
            <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
                <Link to='/'>
                    <Navbar.Brand className='bold-text'>MedicoAId</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <div>
                            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                                <p className='openMenu'>Open Menu</p>
                            </Button>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Doctor: {user.name}</MenuItem>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={(e) => HandleLogout(e)}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarContainer

const Container = styled.div``
