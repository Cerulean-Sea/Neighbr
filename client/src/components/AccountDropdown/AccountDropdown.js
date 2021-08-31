import React, { useState } from 'react';
import {MenuItem, makeStyles, Menu, AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const AccountDropdown = () => {

const useStyles = makeStyles(theme => ({
  accountButton: {
    justifyContent: 'flex-end',
    color: theme.palette.info.main,
  },
  appbar: {
    backgroundColor: theme.palette.primary.main,
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

  return (
    <div>
    <AppBar position="static"
    className={classes.appbar}
    >
        <Toolbar
        className={classes.accountButton}
        >

        <IconButton
          className={classes.menu}
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle/>
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
          >Name</MenuItem>
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

        </Menu>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default AccountDropdown;