import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../Posts/PostList';
import PostForm from '../PostForm/PostForm.jsx';

function Profile() {

  const AUTH = useSelector(state => state.firebase);
  const uid = AUTH?.user?.uid;

  return (
    <div className="app">
      <PostForm/>
      <PostList/>
    </div>
  )
}

export default Profile;
