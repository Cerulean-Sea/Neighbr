import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as api from '../../api/index';
import actions from '../../redux/actions/index';
import Post from './Post';
import Comments from '../Comments/';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

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

  let pageLimit = 20;
  const [loading, setLoading] = useState(true);
  const observer = useRef();
  const lastPostRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
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

  const classes = useStyles();

  return (
    <>
      {posts.map((p, i) => {
        if (posts.length === i + 1) {
          return (
            <div className="post-list-item" key={p._id} ref={lastPostRef}>
              <Accordion className={classes.root}>
                <AccordionSummary>
                  <Post post={p} />
                </AccordionSummary>
                <AccordionDetails>
                  <Comments post={p} />
                </AccordionDetails>
              </Accordion>
            </div>
          )
        } else {
          return (
            <div className="post-list-item" key={p._id}>
              <Accordion className={classes.root}>
                <AccordionSummary>
                  <Post post={p} />
                </AccordionSummary>
                <AccordionDetails>
                  <Comments post={p} />
                </AccordionDetails>
              </Accordion>
            </div>
          )
        }
      })}
    </>
  );
};
