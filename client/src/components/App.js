import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import renderMap from '../helper-functions/renderMap';
import PostForm from './PostForm/PostForm.jsx';
import Login from './Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import LandingPage from './LandingPage';
import AccountDropdown from './AccountDropdown/AccountDropdown.js';
import Profile from './AccountDropdown/Profile';
import Chat from './Chat/Chat';
import Settings from './AccountDropdown/Settings';
import PostList from './Posts/PostList';

import mainTheme from './ThemeApp';
import { ThemeProvider } from '@material-ui/core';

const App = () => {

  const AUTH = useSelector(state => state.firebase);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('profile') && !AUTH) {
      dispatch({type: 'AUTH', payload: JSON.parse(localStorage.getItem('profile'))});
    }
  },[]);

  return (
      <ThemeProvider theme={mainTheme}>
    <Router>
      <div className="app">
        <AccountDropdown />
        <Switch>
          <Route exact path="/">
            {AUTH ? <div>
              <AccountDropdown />
              <PostList />
              <PostForm />
            </div> : <LandingPage />}
          </Route>
          <Route path="/login">
           <Login />
          </Route>
          <Route exact path="/profile">
            {AUTH && <Profile />}
          </Route>
          <Route exact path="/settings">
            {AUTH && <Settings />}
          </Route>
          <Route exact path="/chat">
            {AUTH && <Chat />}
          </Route>
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  )
}

export default App;