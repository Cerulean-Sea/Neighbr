import React from 'react';
import Post from './Post';

export default (props) => {
  const posts = [1, 2, 3, 4, 5];

  return (
    <div>
      {posts.map((p) => <Post />)}
    </div>
  )
};