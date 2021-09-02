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
import Profile from './Profile/Profile';
import Chat from './Chat/Chat';
import Settings from './Settings/Settings';
import PostList from './Posts/PostList';
import Homepage from './Homepage';
import DirectMessaging from './Chat/DirectMessaging';
import mainTheme from './ThemeApp';
import { ThemeProvider } from '@material-ui/core';

const App = () => {

  const AUTH = useSelector(state => state.firebase);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              {AUTH ? <Homepage /> : <><AccountDropdown/><LandingPage /></>}
            </Route>
            <Route path="/login" component={Login}/>
            {AUTH && [
              <Route key="profile" exact path="/profile" component={Profile}/>,
              <Route key="settings" exact path="/settings" component={Settings}/>,
              <Route key="chat" exact path="/chat" component={Chat}/>,
              <Route key="message" exact path="/message" component={DirectMessaging}/>,
            ]}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;