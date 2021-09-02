import React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import moment from 'moment';

import useStyles from './styles';

const CommentTile = ({ comment }) => {
  const classes = useStyles();

  const postTime = moment(comment.updated).fromNow();

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="neighbor" src="ADD USER AVATAR" />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography className={classes.fonts}>{comment.username}</Typography>}
          secondary={
          <>
            <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
              {comment.email}
            </Typography>
            <Typography variant="body1" className={classes.inline}>
              {`: ${comment.text}`}
            </Typography>
          </>}
        />
        <ListItemText alignItems="right">{postTime}</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
};

export default CommentTile;