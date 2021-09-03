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
            <Typography variant="body1" className={classes.inline}>
              {comment.text.match(new RegExp('.{1,' + 20 + '}', 'g')).join('\n')}
            </Typography>
          }
        />
        {postTime}
      </ListItem>
      <Divider />
    </div>
  );
};

export default CommentTile;