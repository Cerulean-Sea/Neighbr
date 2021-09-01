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
<<<<<<< HEAD
import Profile from '../components/AccountDropdown/Profile';
import Chat from '../components/Chat/Chat';
import Settings from '../components/AccountDropdown/Settings';
import Homepage from './Homepage';
=======
import Profile from './Profile/Profile';
import Chat from './Chat/Chat';
import Settings from './AccountDropdown/Settings';
import PostList from './Posts/PostList';
>>>>>>> ae84050f36cbe30c0721d19f7bffe356903b346b

import mainTheme from './ThemeApp';
import { ThemeProvider } from '@material-ui/core';

const App = () => {

  const AUTH = useSelector(state => state.firebase);
  const dispatch = useDispatch();

  return (
      <ThemeProvider theme={mainTheme}>
    <Router>
      <div className="app">
        <AccountDropdown />
        <Switch>
          <Route exact path="/">
            {AUTH ? <div>
              <PostForm />
              <PostList />
            </div> : <LandingPage />}
          </Route>
          <Route path="/login" component={Login}/>
          {AUTH && [
            <Route key="profile" exact path="/profile" component={Profile}/>,
            <Route key="settings" exact path="/settings" component={Settings}/>,
            <Route key="chat" exact path="/chat" component={Chat}/>,
          ]}
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  )
}

export default App;