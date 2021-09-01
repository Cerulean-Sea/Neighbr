import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../Posts/PostList';

function Profile() {

  const AUTH = useSelector(state => state.firebase);
  const uid = AUTH?.user?.uid;

  return (
    <div className="app">
      <PostList/>
    </div>
  )
}

export default Profile;
