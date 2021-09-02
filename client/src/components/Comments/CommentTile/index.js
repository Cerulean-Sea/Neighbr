import React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';

import useStyles from './styles';

const CommentTile = ({ comment }) => {
  const classes = useStyles();

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="neighbor" src="ADD USER AVATAR" />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography className={classes.fonts}>{comment.username}</Typography>}
          secondary={<><Typography component="span" variant="body2" className={classes.inline} color="textPrimary">{comment.email}</Typography>{`: ${comment.text}`}</>}
        />
      </ListItem>
      <Divider />
    </div>
  );
};

export default CommentTile;