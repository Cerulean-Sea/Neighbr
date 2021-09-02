import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as api from '../../api';
import moment from 'moment';
import actions from '../../redux/actions/index';
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
  AccordionDetails,
  AccordionSummary,
  Accordion
} from '@material-ui/core';
import { MoreVert, Facebook, Twitter, Instagram, Reddit } from '@material-ui/icons';

import useStyles from './stylesPost';
import RenderMap from '../../helper-functions/renderMap';
import Comments from '../Comments/';

export default ({ post }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const AUTH = useSelector((state) => state.firebase);
  const user = AUTH?.user;
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const menuOpen = Boolean(anchorEl);

  let options;
  if (user?.uid === post?.userInfo?.userId) {
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

  const deletePost = async (id) => {
    try {
      await api.deletePost(id);
      actions.posts(dispatch);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogClose = () => {
      setDialogOpen(false);
  };

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
      <Accordion>
        <AccordionSummary className={classes.cardBackground}>

          <CssBaseline />
          <Card className={classes.card}>

            <Grid className={classes.header}>
              <Avatar
                className={classes.avatar}
                alt="Neighbor"
                src={post?.userInfo?.picture || 'https://firebasestorage.googleapis.com/v0/b/neighbr-55334.appspot.com/o/no-photo.png?alt=media&token=b0bd075e-2bd2-48c8-9cff-c448930ab8ba'}
              />
              <Grid>
                <Typography variant="body1">{post?.userInfo?.name}</Typography>
                <Typography className={classes.typography} variant="h6">
                  {post.title}
                </Typography>
                {post.tags.map((tag) => <span key={tag} className={`${classes.tag} ${classes[tag.replace(/\s/g, "")]}`}>{`${tag}!`}</span>)}
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
                open={menuOpen}
                onClose={handleMenuClose}
              >
                {options.map((o) => (
                  <div key={o}>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={(e) => {
                        handleMenuClose();
                        if (o === 'Share') setDialogOpen(true);
                        if (o === 'Delete Post') deletePost(post._id);
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
              {/* {post.text.slice(0, 50)} */}
              {post.text.length >= 49 ?
                (<AccordionDetails>{post.text.slice(0, 50)}...</AccordionDetails>) :
                (<AccordionDetails>{post.text}</AccordionDetails>)
              }
            </Typography>
            {post.location && (
              <div className="map" style={{padding: "10px"}}>
                <RenderMap options={post.location}/>
              </div>
            )}

            <Grid className={classes.footer}>
              <Typography variant="body2">
                {`${post.commentId.length} comments`}
              </Typography>

              <Typography variant="body2">
                {moment(post.created).fromNow()}
              </Typography>
            </Grid>

          </Card>
        </AccordionSummary>
        <div>
          {post.text.length >= 49 ?
            (<AccordionDetails>{post.text}</AccordionDetails>) :
            (<span></span>)
          }
        </div>
        <AccordionDetails>
            <Comments post={post} />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
