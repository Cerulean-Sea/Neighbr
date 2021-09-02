import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {Grid, MenuItem, makeStyles, Menu, AppBar, Toolbar, Avatar, Box, Button, Hidden, Fab } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AccountCircle from '@material-ui/icons/AccountCircle';

const AccountDropdown = ({showPost, setShowPost, showFilter, setShowFilter}) => {

  const AUTH = useSelector(state => state.firebase);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

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
  const useMobileStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: '-80%',
      margin: '0 auto',
    },
    link: {
      textDecoration: 'none',
      color: '#fff'
    }
  }));

  const classes = useStyles();
  const mobileClasses= useMobileStyles();
  const [anchorEl, setAnchorEl] = useState(null);
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
      <Hidden xsDown>
        <Grid container >
          <AppBar position="static" className={classes.appbar} >
            <Toolbar className={classes.accountButton}>
              <Box display='flex' flexGrow={1}>
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
        </Grid>
      </Hidden>
      <Hidden smUp>
      <AppBar position="fixed" color="primary"
      className={mobileClasses.appBar}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open menu">
            <Avatar src='./assets/logo.png' component={Link} to="/"/>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open friends"
            component={Link} to='/friends'>
            <SupervisorAccountIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open chats"
            component={Link} to='/chat'>
            <ForumIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open filters"
            onClick={()=>{setShowFilter(!showFilter)}}>
            <LocalOfferIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add post"
          className={mobileClasses.fabButton}
          >
            <AddIcon onClick={()=>{
              setShowPost(!showPost)}}/>
          </Fab>
        </Toolbar>
      </AppBar>
      </Hidden>
      </>
  )
}

export default AccountDropdown;
