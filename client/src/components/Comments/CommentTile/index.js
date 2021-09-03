import React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Hidden, Grid } from '@material-ui/core';
import moment from 'moment';

import useStyles from './styles';

const CommentTile = ({ comment }) => {
  const classes = useStyles();

  const postTime = moment(comment.updated).fromNow();

  return (
    <div>
      <Hidden xsDown>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="neighbor" src="ADD USER AVATAR" />
        </ListItemAvatar>
        <ListItemText
          disableTypography
          primary={<Typography className={classes.fonts}>{comment.username}</Typography>}
          secondary={
            <Typography style={{ wordWrap: 'break-word' }}>{comment.text}</Typography>
          }
        />
        {postTime}
      </ListItem>
      <Divider />
      </Hidden>

      <Hidden smUp>
        <Grid container>
          <Grid item xs={12}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="neighbor" src="ADD USER AVATAR" />
              </ListItemAvatar>
              <ListItemText
                primary={comment.username}
                secondary={
                  <>
                    <Typography style={{ wordWrap: 'break-word' }}>{comment.text}</Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default CommentTile;