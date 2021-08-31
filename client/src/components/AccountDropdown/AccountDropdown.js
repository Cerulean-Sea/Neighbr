import React, { useState } from 'react';
import {MenuItem, makeStyles, Menu, AppBar, Toolbar, AlarmIcon} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import ChangeLocation from './ChangeLocation';
import Chat from './Chat';
import Settings from './Settings';

const AccountDropdown = () => {

const useStyles = makeStyles(theme => ({
  accountButton: {
    justifyContent: 'flex-end',
  },
  appbar: {
    backgroundColor: "#F4A261",
    justifyContent: 'flex-start'
  },
  dropdown: {
    backgroundColor: "#F4A261",
    color: 'white',
  },
  link: {
    textDecoration: 'none'
  }
}));

const classes = useStyles();
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const userId = '612ac35bc4ee0611f70b7aa3';

const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <Router>
    <div>
    <AppBar position="static"
    className={classes.appbar}
    >
        <Toolbar className={classes.accountButton}>

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

          <Link to='/location'
          className={classes.link}
          >
          <MenuItem
          className={classes.dropdown}
          >Location</MenuItem>
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

        <Switch>
        <Route path="/profile" component={Profile} />
        <Route path='/settings' component={Settings} />
        <Route path='/chat' component={Chat} />
        <Route path='/location' component={ChangeLocation} />
        </Switch>
    </div>
    </Router>
  )
}

export default AccountDropdown;