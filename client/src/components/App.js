import React from 'react';

import Login from './Login/Login'
import renderMap from '../helper-functions/renderMap';

import useStyles from './styleApp'

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Login />
    </div>
  )
}

export default App;