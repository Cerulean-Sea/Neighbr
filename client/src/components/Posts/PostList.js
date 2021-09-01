import React from 'react';
import {useSelector, useDispatch } from 'react-redux';

import Post from './Post';

import * as sampleData from '../../../dist/assets/sample-post-data';


export default (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts.map((p) => <Post post={p} />)}
    </div>
  );
};
