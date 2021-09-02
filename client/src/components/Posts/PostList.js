import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as api from '../../api/index';
import actions from '../../redux/actions/index';
import Post from './Post';
import DirectMessaging from '../Chat/DirectMessaging';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

export default (props) => {
  const filterState = props.filterState;
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
        getPosts(pageLimit);
        pageLimit += 10;
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  const getPosts = async (pageLimit) => {
    const filters = [];
    for (let tag in filterState) {
      if (filterState[tag]) {
        filters.push(tag);
      }
    }
    if (location.pathname === '/') {
      if (filters.length) {
        console.log('getting post with tags', pageLimit);
        await dispatch(actions.getPostWithTagFilter(filters, 1, pageLimit));
      } else {
        await actions.posts(dispatch, 1, pageLimit);
      }
    } else if (location.pathname === '/profile') {
      if (filters.length) {
        await dispatch(actions.getPostWithTagFilterByUserId(userId, filters, 1, pageLimit));
      } else {
        await dispatch(actions.getPostsByUserId(userId, 1, pageLimit));
      }
    }
  }

  useEffect(async () => {
    setLoading(true);
    await getPosts(pageLimit);
    pageLimit += 10;
    setLoading(false);
  }, [filterState]);

  const classes = useStyles();

  return (
    <>
      {posts.map((p, i) => {
        if (posts.length === i + 1) {
          return (
            <div className="post-list-item" key={p._id} ref={lastPostRef}>
              <Post post={p} />
            </div>
          )
        } else {
          return (
            <div className="post-list-item" key={p._id}>
              <Post post={p} />
            </div>
          )
        }
      })}

      <MailOutlineIcon
      //  component={Link} to="/message"
       />
    </>
  );
};
