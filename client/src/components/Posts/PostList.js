import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import actions from '../../redux/actions/index';
import Post from './Post';

export default (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const location = useLocation();
  const AUTH = useSelector(state => state.firebase);
  const userId = AUTH?.user?.uid;

  useEffect(() => {
    if (location.pathname === '/') {
      actions.posts(dispatch);
    } else if (location.pathname === '/profile') {
      dispatch(actions.getPostsByUserId(userId));
    }
  }, []);

  return (
    <>
      {posts.map((p) => <Post key={p._id} post={p} />)}
    </>
  );
};
