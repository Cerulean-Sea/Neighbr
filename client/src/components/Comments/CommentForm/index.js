import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import useStyles from './styles';
import { postComment } from '../../../redux/actions/comments';
import firebaseConfig from '../../../redux/actions/firebase/config';

const CommentForm = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);

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
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField id="text" name="text" value={form.text} onChange={handleInputChange} placeholder="Write a comment..."  variant="outlined" required/>
      </form>
    </>
  );

};

export default CommentForm;