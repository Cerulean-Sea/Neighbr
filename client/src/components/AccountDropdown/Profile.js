import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {

  const AUTH = useSelector(state => state.firebase);
  const uid = AUTH?.user?.uid;

  return (
    <div className="app">
      <h1>Profile</h1>
      <h2>render profile info??</h2>
    </div>
  )
}

export default Profile;