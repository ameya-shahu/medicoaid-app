import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Link } from 'react-router-dom'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    fontWeight: 700,
    color: 'white',
    textDecoration: 'none',
    marginRight: 'auto'
  },
  title1: {
    flexGrow: 1,
    color: 'black',
    textDecoration: 'none',
    padding: '0'
  },
}));

export default function NavbarContainer({userInfo}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const HandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userAuthData");
    window.location.href = "/";
    window.location.reload();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#9390FF' }}>
        <Toolbar>
            <Typography variant="h5" className={classes.title}>
                MedicoAId
            </Typography>
          
            <div>
              <IconButton
                id='fade-menu'
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to='/profile'>
                        <p className={classes.title1}>Profile</p>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to='/'>
                        <p className={classes.title1}>Home</p>
                    </Link>
                </MenuItem>
                <MenuItem onClick={(e) => HandleLogout(e) }>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}