import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Homepage from '../Homepage';

function Profile() {

  const AUTH = useSelector(state => state.firebase);
  const uid = AUTH?.user?.uid;

  const community = AUTH?.community;
  if (community === '') {
    return (
      <Redirect to="/community" />
    )
  }

  return (
    <div className="app">
      <Homepage/>
    </div>
  )
}

export default Profile;
