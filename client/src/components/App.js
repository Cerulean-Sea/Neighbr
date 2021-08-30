import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import renderMap from '../helper-functions/renderMap';
import PostForm from './PostForm/PostForm.jsx';
import Login from './Login/Login';
import { useSelector } from 'react-redux';

const App = () => {

const AUTH = useSelector(state => state.firebase);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {!AUTH && <Login />}
          </Route>
        </Switch>
        <PostForm />
      </div>
    </Router>
  )
}

export default App;