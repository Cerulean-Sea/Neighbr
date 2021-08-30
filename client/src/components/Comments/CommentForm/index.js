import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
// import { useForm } from 'react-hook-form';

import useStyles from './styles';

const CommentForm = () => {
  const classes = useStyles();
  const [commentText, setCommentText] = useState('');
  // const { register, handleSubmit, reset, watch } = useForm();

  // const currentText = watch('text');

  const onSubmit = async (data: Inputs) => {
    setText(data.text);
    // reset();
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form onSubmit={onSubmit}>
        {/* <TextField inputRef={register} id="text" name="text" helperText="Write a comment..." /> */}
        <TextField id="text" name="text" helperText="Write a comment..." />
      </form>
    </>
  );

};

export CommentForm;