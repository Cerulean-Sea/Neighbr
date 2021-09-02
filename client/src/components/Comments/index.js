import React from 'react';
import { useSelector } from 'react-redux';
import { List, CircularProgress } from '@material-ui/core';

import CommentTile from './CommentTile/';
import CommentForm from './CommentForm/';
import useStyles from './styles';

const Comments = ({ post }) => {
  const classes = useStyles();

  return (
    !post.commentId.length? <CommentForm post={post} /> : (
      <List className={classes.root}>
        {post.commentId.map((comment) => (
          <React.Fragment key={comment._id}>
            <CommentTile comment={comment} />
          </React.Fragment>
        ))}
        <CommentForm post={post} />
      </List>
    )
  );
};

export default Comments;