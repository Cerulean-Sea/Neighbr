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
import Chat from '../components/Chat/Chat';
import Settings from '../components/AccountDropdown/Settings';
import Homepage from './Homepage';

const App = () => {

const AUTH = useSelector(state => state.firebase);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {AUTH ? <div> <AccountDropdown /> <Homepage />  </div> : <LandingPage />}
          </Route>
          <Route path="/login">
           <Login />
          </Route>
          <Route exact path="/profile">
            {AUTH && <AccountDropdown />}
            {AUTH && <Profile />}
          </Route>
          <Route exact path="/settings">
            {AUTH && <AccountDropdown />}
            {AUTH && <Settings />}
          </Route>
          <Route exact path="/chat">
            {AUTH && <AccountDropdown />}
            {AUTH && <Chat />}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;