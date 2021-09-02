import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';

import useStyles from './styles';
import { postComment } from '../../../redux/actions/comments';
import { updatePost } from '../../../redux/actions/Posts';
import * as api from '../../../api';
import actions from '../../../redux/actions/index';

const CommentForm = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const AUTH = useSelector((state) => state.firebase);
  const userId = AUTH?.user.uid;
  const displayName = AUTH?.user.displayName;
  const community = AUTH?.community;

  const initialState = {
    text: '',
  };

  const [form, setForm] = useState(initialState);

  const { text } = form;

  const handleInputChange = (e) => {
    setForm(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
  };

  const commentObj = {
    userId,
    username: displayName,
    text,
    postId: post._id
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(() => {
      dispatch(postComment(commentObj));
      post.commentId.push(commentObj)
      updatePost(post._id, post)
    });
    setForm(initialState);
  }

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField id="text" name="text" value={form.text} onChange={handleInputChange} placeholder="Write a comment..."  variant="outlined" required/>
      </form>
    </>
  );

};

export default CommentForm;