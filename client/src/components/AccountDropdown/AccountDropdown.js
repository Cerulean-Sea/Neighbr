import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {MenuItem, makeStyles, Menu, AppBar, Toolbar, Avatar, Box, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const AccountDropdown = () => {

  const AUTH = useSelector(state => state.firebase);
  const dispatch = useDispatch();
  const history = useHistory();

  const useStyles = makeStyles(theme => ({
    accountButton: {
      justifyContent: 'flex-end',
      color: '#264653'
    },
    appbar: {
      backgroundColor: "#F4A261",
      justifyContent: 'flex-start'
    },
    dropdown: {
      backgroundColor: "#F4A261",
      color: '#264653',
      textDecoration: 'bold',
    },
    link: {
      textDecoration: 'none'
    }
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch({type: 'LOGOUT'});
    history.push('/');
  };

  return (
    <div>
    <AppBar position="static"
    className={classes.appbar}
    >
        <Toolbar className={classes.accountButton}>
          <Box display="flex" flexGrow={1}>
            <Avatar src='./assets/logo.png' component={Link} to="/"/>
          </Box>

          {!AUTH && (
            <Button component={Link} to="/login" variant="contained" color="default">Login</Button>
          )}

          {AUTH && (
            <div>
              <IconButton
                className={classes.menu}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {AUTH.user.photoURL ? <Avatar src={AUTH.user.photoURL}/> : <AccountCircle/>}

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
                onClick={handleClose}
              >
                <Link to='/profile'
                className={classes.link}
                >
                <MenuItem
                className={classes.dropdown}
                >{AUTH.user.displayName}</MenuItem>
                </Link>

                <Link to='/chat'
                className={classes.link}
                >
                <MenuItem
                className={classes.dropdown}
                >Notifications</MenuItem>
                </Link>

                <Link to='/settings'
                className={classes.link}
                >
                <MenuItem
                className={classes.dropdown}
                >Settings</MenuItem>
                </Link>
                <MenuItem
                className={classes.dropdown}
                onClick={logout}
                >Logout</MenuItem>

              </Menu>
              </div>

          )}

      </Toolbar>
    </AppBar>
    </div>
  )
}

export default AccountDropdown;
