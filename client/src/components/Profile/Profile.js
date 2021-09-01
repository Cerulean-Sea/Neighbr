import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Homepage from '../Homepage';

function Profile() {

  const AUTH = useSelector(state => state.firebase);
  const uid = AUTH?.user?.uid;

  return (
    <div className="app">
      <Homepage/>
    </div>
  )
}

export default Profile;
