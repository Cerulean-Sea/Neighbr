import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

import * as api from '../../api/index';
import actions from '../../redux/actions/index';
import Post from './Post';



export default (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      posts: state.posts,
      auth: state.firebase,
    }
  });
  const posts = state.posts;
  const AUTH = state.auth;
  const location = useLocation();
  const userId = AUTH?.user?.uid;

  useEffect(() => {
    if (location.pathname === '/') {
      actions.posts(dispatch);
    } else if (location.pathname === '/profile') {
      dispatch(actions.getPostsByUserId(userId));
    }
  }, []);

  let pageLimit = 20;
  if (location.pathname === '/' && localStorage.profile) {
    window.addEventListener('scroll', (e) => {
      console.log('bottom');
      // const scrollY = window.scrollY;
      // const innerHeight = window.innerHeight;
      // const docHeight = document.documentElement.scrollHeight;

      // if (scrollY + innerHeight >= docHeight && localStorage.profile) {
      //   actions.posts(dispatch, 1, pageLimit);
      //   pageLimit += 10;
      // }
      // e.stopImmediatePropagation();


    });
  };

  return (
    <>
      {posts.map((p) => <div className="post-list-item" key={p._id}><Post post={p} /></div>)}
    </>
  );
};
