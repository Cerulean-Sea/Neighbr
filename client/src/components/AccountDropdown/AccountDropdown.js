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
  root: {
    flexGrow: 1,
  },
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
    <div className={classes.root}>
    <AppBar position="static"
    elevation={0}>
        <Toolbar>

        <IconButton
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
          <Link to='/profile'>
          <MenuItem
          >Name</MenuItem>
          </Link>

          <Link to='/location'>
          <MenuItem
          >Location</MenuItem>
          </Link>

          <Link to='/chat'>
          <MenuItem
          >Notifications</MenuItem>
          </Link>

          <Link to='/settings'>
          <MenuItem
          >Settings</MenuItem>
          </Link>

        </Menu>
      </Toolbar>
    </AppBar>

      {/* <FormControl className={classes.formControl}>
        <InputLabel>Account</InputLabel>

          <Select
          value={menuItem}
          MenuProps={{className: classes.menu}}
          onChange={handleChange}
          >
            <Link to='/profile' exact>
            <MenuItem
            value="name"
            className={classes.listItem}
            >Name</MenuItem>
            </Link>

            <Link to='/location' exact>
            <MenuItem
            value="location"
            className={classes.listItem}
            >Location</MenuItem>
            </Link>

            <Link to='/chat' exact>
            <MenuItem
            value="notifications"
            className={classes.listItem}
            >Notifications</MenuItem>
            </Link>

            <Link to='/settings' exact>
            <MenuItem
            value="settings"
            className={classes.listItem}
            >Settings</MenuItem>
            </Link>

          </Select>
      </FormControl> */}

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