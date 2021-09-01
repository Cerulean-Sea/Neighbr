import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

import Post from './Post';



export default (props) => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      {posts.map((p) => <div className="post-list-item" key={p._id}><Post post={p} /></div>)}
    </>
  );
};
