import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';

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

  useEffect(() => {
    actions.posts(dispatch);
  }, []);

  let pageLimit = 20;

  if (window.location.href === 'http://localhost:3000/' && AUTH) {
    window.addEventListener('scroll', (e) => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + innerHeight >= docHeight && localStorage.profile) {
        actions.posts(dispatch, 1, pageLimit);
        pageLimit += 10;
      }
      e.stopImmediatePropagation();
    });
  };

  return (
    <>
      {posts.map((p) => <Post key={p._id} post={p} />)}
    </>
  );
};
