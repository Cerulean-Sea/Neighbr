import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import renderMap from '../helper-functions/renderMap';
import PostForm from './PostForm/PostForm.jsx';
import Login from './Login/Login';
import mainTheme from './ThemeApp';

const App = () => {

const AUTH = useSelector(state => state.firebase);

  return (
    <ThemeProvider theme={}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              {!AUTH && <Login />}
              {AUTH && <div> This content after credentials are verified</div>}
            </Route>
          </Switch>
          <PostForm />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;