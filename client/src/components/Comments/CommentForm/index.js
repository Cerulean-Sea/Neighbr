import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';

import useStyles from './styles';
import { postComment } from '../../../redux/actions/comments';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment({
      userId,
      username: displayName,
      text,
      postId: post._id
  }));
    setForm(initialState)
  }

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item sm={12} md={12} lg={12}>
        <form onSubmit={handleSubmit}>
          <TextField name="text" value={form.text} onChange={handleInputChange} placeholder="Write a comment..."  variant="outlined" required fullWidth/>
        </form>
      </Grid>
    </Grid>
  );

};

export default CommentForm;