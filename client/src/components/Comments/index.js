import React from 'react';
import { useSelector } from 'react-redux';
import { List, CircularProgress } from '@material-ui/core';

import CommentTile from './CommentTile/';
import CommentForm from './CommentForm/';
import useStyles from './styles';

const Comments = () => {
  const comments = useSelector((state) => state.comments);
  const classes = useStyles();

  return (
    !comments.length? <CircularProgress /> : (
      <List className={classes.root}>
        {comments.map((comment) => (
          <React.Fragment key={comment._id}>
            <CommentTile comment={comment} />
          </React.Fragment>
        ))}
        <CommentForm />
      </List>
    )
  );
};

export default Comments;