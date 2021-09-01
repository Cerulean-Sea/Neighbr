import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';

import actions from '../../redux/actions/index';
import Post from './Post';

export default (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    actions.posts(dispatch);
  }, []);

  return (
    <>
      {posts.map((p) => <Post key={p._id} post={p} />)}
    </>
  );
};
