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
          disableTypography
          primary={<Typography className={classes.fonts}>{comment.username}</Typography>}
          secondary={
          <div>
            <Typography component="span" variant="body1" className={classes.inline}>
              {`: ${comment.text}`}
            </Typography>
          </div>}
        />
        {postTime}
      </ListItem>
      <Divider />
    </div>
  );
};

export default CommentTile;