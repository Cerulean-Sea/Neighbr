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
    <div>
      {posts.map((p) => <Post post={p} />)}
    </div>
  );
};
