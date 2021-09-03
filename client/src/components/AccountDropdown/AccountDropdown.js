import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  MenuItem, makeStyles, Menu, AppBar,
  Toolbar, Avatar, Box, Button, Hidden,
  CssBaseline, Fab } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TagIcon from '@material-ui/icons/LocalOffer';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/ForumOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';

const AccountDropdown = () => {


  const AUTH = useSelector(state => state.firebase);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const showPost = useSelector((state) => state.ShowPost)
  const showFilter = useSelector((state) => state.ShowFilter)

  const useStyles = makeStyles(theme => ({
    accountButton: {
      justifyContent: 'flex-end',
      color: '#264653'
    },
    appbar: {
      backgroundColor: "#2A9D8F",
      justifyContent: 'flex-start'
    },
    dropdown: {
      color: '#264653',
      textDecoration: 'bold',
      '&:hover': {
        backgroundColor: '#F4A261'
      }
    },
    link: {
      textDecoration: 'none',
    },
    btn: {
      backgroundColor: '#264653',
      color: 'white',
      '&:hover': {
        backgroundColor: '#2A9D8F'
      }
    },
    menu: {
      backgroundColor: '#2A9D8F'
    }
  }));
  const useMobileStyles = makeStyles((theme) => ({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 3,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 2000,
      top: -30,
      left: '80%',
      right: 0,
      margin: '0 auto',
    },
  }));

  const classes = useStyles();
  const mobileClasses = useMobileStyles();
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

  useEffect(() => {
    if (AUTH) {
      const expirationTime = AUTH.user.stsTokenManager.expirationTime;
      if (expirationTime < new Date().getTime()) {
        logout();
      }
    }
    if (localStorage.getItem('profile')) {
      dispatch({type: 'AUTH', payload: JSON.parse(localStorage.getItem('profile'))});
    }
  }, [location]);

  return (
    <>
      {/* APP BAR TOP ABOVE 600PX WIDTH */}
    <Hidden xsDown>
    <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.accountButton}>
          <Box display="flex" flexGrow={1}>
            <Avatar src='./assets/logo.png' component={Link} to="/"/>
          </Box>

          {!AUTH && (
            <Button component={Link} className={classes.btn} to="/login" variant="contained" color="default">Login</Button>
          )}

          {AUTH && (
            <div>
              <Hidden xsDown>
                <Button variant="outlined" style={{margin: "20px"}} onClick={() => dispatch({ type: 'SHOW_POST'})}>{showPost ? "View Feed" : "Create Post"}</Button>
                <Button variant="outlined" style={{margin: "20px"}} onClick={() => dispatch({ type: 'SHOW_FILTER'})}>{showFilter ? "Hide Filters" : "Show Filters"}</Button>
              </Hidden>
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
    </Hidden>
    {/* MOBILE APP BAR LAYOUT BELOW */}
    <Hidden smUp>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={mobileClasses.appBar}>
        <Toolbar>
          {!AUTH &&
            <Box display="flex" flexGrow={1}>
              <Avatar src='./assets/logo.png' component={Link} to="/"/>
            </Box>}
          {!AUTH && (
            <Button component={Link} className={classes.btn} to="/login" variant="contained" color="default">Login</Button>
          )}
        {AUTH && <>
          <Fab
            color="secondary"
            aria-label="add"
            className={mobileClasses.fabButton}
            onClick={() => dispatch({ type: 'SHOW_POST'})}>
            <AddIcon />
          </Fab>
          {/* <IconButton
                className={classes.menu}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              > */}
              <div style={{flexGrow:1}}>
                {AUTH.user.photoURL ?
                  <Avatar
                    src={AUTH.user.photoURL}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"/> :
                  <AccountCircle/>}
                </div>
              {/* </IconButton> */}
          <div className={mobileClasses.grow}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => dispatch({ type: 'SHOW_FILTER'})}>
            <TagIcon />
          </IconButton>
          <IconButton
            color="inherit"
            edge="start"
            component={Link} to='/chat'>
            <ChatIcon />
          </IconButton>
          </div>
        </>}
        </Toolbar>
      </AppBar>
    </Hidden>
    </>
  )
}

export default AccountDropdown;
