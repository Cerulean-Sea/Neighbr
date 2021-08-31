import React from 'react';
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
import { useSelector } from 'react-redux';
import LandingPage from './LandingPage';
import AccountDropdown from './AccountDropdown/AccountDropdown.js';
import Profile from '../components/AccountDropdown/Profile';
import Chat from '../components/AccountDropdown/Chat';
import Settings from '../components/AccountDropdown/Settings';

const App = () => {

const AUTH = useSelector(state => state.firebase);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {AUTH ? <div> This is the homepage component </div> : <LandingPage />}
          </Route>
          <Route path="/login">
           <Login />
          </Route>
          <Route exact path="/profile">
            {AUTH && <Profile />}
          </Route>
          <Route exact path="/settings">
            {!AUTH && <Settings />}
          </Route>
          <Route exact path="/chat">
            {!AUTH && <Chat />}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;