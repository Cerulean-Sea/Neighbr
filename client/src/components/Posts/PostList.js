import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

<<<<<<< HEAD
import * as api from '../../api/index';
import actions from '../../redux/actions/index';
=======
>>>>>>> main
import Post from './Post';



export default (props) => {
<<<<<<< HEAD
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

  let pageLimit = 20;
  const [loading, setLoading] = useState(true);
  const observer = useRef();
  const lastPostRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('visible');
        actions.posts(dispatch, 1, pageLimit);
        pageLimit += 10;
      }
    });
    if (node) observer.current.observe(node);
  }, [loading])

  useEffect(() => {
    setLoading(true);
    if (location.pathname === '/') {
      actions.posts(dispatch);
      setLoading(false);
    } else if (location.pathname === '/profile') {
      dispatch(actions.getPostsByUserId(userId));
      setLoading(false);
    }
  }, []);
=======
  const posts = useSelector((state) => state.posts);
>>>>>>> main

  // if (location.pathname === '/' && localStorage.profile) {
  //   window.addEventListener('scroll', (e) => {
  //     console.log('bottom');
  //     // const scrollY = window.scrollY;
  //     // const innerHeight = window.innerHeight;
  //     // const docHeight = document.documentElement.scrollHeight;

  //     // if (scrollY + innerHeight >= docHeight && localStorage.profile) {
  //     //   actions.posts(dispatch, 1, pageLimit);
  //     //   pageLimit += 10;
  //     // }
  //     // e.stopImmediatePropagation();


  //   });
  // };

  return (
    <>
      {posts.map((p, i) => {
        if (posts.length === i + 1) {
          return <div className="post-list-item" key={p._id} ref={lastPostRef}><Post post={p} /></div>
        } else {
          return <div className="post-list-item" key={p._id}><Post post={p} /></div>
        }
      })}
    </>
  );
};
