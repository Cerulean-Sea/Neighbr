import React from 'react';
import { useSelector } from 'react-redux';
import { List, Container } from '@material-ui/core';

import CommentTile from './CommentTile/';
import CommentForm from './CommentForm/';
import useStyles from './styles';

const Comments = ({ post }) => {
  const classes = useStyles();

  const sortedComments = post.commentId.slice().sort((a, b) => b.updated - a.updated).reverse();

  return (
    !post.commentId.length? <Container><CommentForm post={post} /></Container> : (
      <Container>
        <CommentForm post={post} />
        <List className={classes.root}>
          {sortedComments.map((comment) => (
            <React.Fragment key={comment._id}>
              <CommentTile comment={comment} />
            </React.Fragment>
          ))}
        </List>
      </Container>
    )
  );
};

export default Comments;