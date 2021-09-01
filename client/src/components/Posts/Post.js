import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
  Avatar,
  IconButton,
  Container,
  Card,
  CssBaseline,
  Menu,
  MenuItem,
  Grid,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { MoreVert, Facebook, Twitter, Instagram, Reddit } from '@material-ui/icons';
import moment from 'moment';

import useStyles from './stylesPost';

export default ({ post }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.firebase.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const menuOpen = Boolean(anchorEl);

  let options;
  if (user.uid === post.userId) {
    options = ['Share', 'Edit Post', 'Hide', 'Delete Post'];
  } else {
    options = ['Share', 'Hide', 'Report'];
  }

  const shareOptions = {
    Facebook: {
      url: 'https://www.facebook.com/',
      icon: () => <Facebook />
    },
    Instagram: {
      url: 'https://www.instagram.com/',
      icon: () => <Instagram />
    },
    Twitter: {
      url: 'https://twitter.com/share?ref_src=twsrc%5Etfw',
      icon: () => <Twitter />
    },
    Reddit: {
      url: 'https://www.reddit.com/',
      icon: () => <Reddit />
    },
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogClose = () => {
      setDialogOpen(false);
    }

  const SharePost = () => {
    return (
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Share This Post!</DialogTitle>
        <List>
          {Object.keys(shareOptions).map((s) => (
            <ListItem
              button
              component="a"
              href={shareOptions[s].url}
              onClick={(e) => e.preventDefault()}
              color="inherit"
              key={s}
            >
                <ListItemIcon>
                  {shareOptions[s].icon()}
                </ListItemIcon>
                <ListItemText primary={s}/>
            </ListItem>
          ))}
        </List>
      </Dialog>
    )
  };

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Card className={classes.card}>

        <Grid className={classes.header}>
          <Avatar
            className={classes.avatar}
            alt="Neighbor"
            src="/neighbor.png"
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
            }}
            className={classes.fab}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="short-menu"
            anchorEl={anchorEl}
            keepMounted
            open={menuOpen}
            onClose={handleMenuClose}
          >
            {options.map((o) => (
              <div key={o}>
                <MenuItem
                  onClick={(e) => {
                    handleMenuClose();
                    if (o === 'Share') setDialogOpen(true);
                  }}
                >
                  {o}
                </MenuItem>
                {o === 'Share' && <SharePost />}
              </div>
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
