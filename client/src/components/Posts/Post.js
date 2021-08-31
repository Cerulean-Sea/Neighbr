import React, { useState } from 'react';
import {
  Typography,
  Avatar,
  IconButton,
  Container,
  Card,
  CssBaseline,
  Menu,
  MenuItem,
  Grid
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';

import useStyles from './stylesPost';

export default ({ post }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const options = ['Mark as Read', 'Hide Post', 'Report Post'];

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className={classes.container} onClick={() => alert('EXPAND POST')}>
      <CssBaseline />
      <Card className={classes.card}>

        <Grid className={classes.header}>
          <Avatar
            className={classes.avatar}
            alt="Neighbor"
            src="/neighbor.png"
            onClick={() => alert('VIEW MODAL WITH USER INFO')}
          />
          <Grid>
            <Typography className={classes.typography} variant="h6">
              {post.title}
            </Typography>
            {post.tags.map((tag) => <span key={tag} className={`${classes.tag} ${classes[tag]}`}>{`${tag}!`}</span>)}
          </Grid>

          <IconButton
            aria-label="options"
            aria-controls="short-menu"
            aria-haspopup="true"
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
              e.stopPropagation();
            }}
            className={classes.fab}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="short-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            {options.map((o) => (
              <MenuItem
                key={o}
                onClick={(e) => {
                  handleClose();
                  alert(o);
                  e.stopPropagation();
                }}
              >
                {o}
              </MenuItem>
            ))}
          </Menu>
        </Grid>

        <Typography variant="body1" paragraph={true}>
          {post.text}
        </Typography>

        <Grid className={classes.footer}>
          <Typography variant="body2">
            {`${post.commentId.length} comments`}
          </Typography>

          <Typography variant="body2">
            {moment(post.created).fromNow()}
          </Typography>
        </Grid>

      </Card>
    </Container>
  );
};
