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
  Accordion,
  Button,
  Hidden
} from '@material-ui/core';
import { MoreVert, Facebook, Twitter, Instagram, Reddit } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


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
  const [readMore, setReadMore] = useState(false);
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

  const onReadMore = () => {
    setReadMore(!readMore);
  }

  return (
    <>
      <Hidden xsDown>
        <Container className={classes.container}>
          <CssBaseline />
            <Card className={classes.card} style={{padding: '3%'}}>
              <Grid className={classes.header}>
                <Avatar className={classes.avatar} alt="Neighbor" src={post?.userInfo?.picture || 'https://firebasestorage.googleapis.com/v0/b/neighbr-55334.appspot.com/o/no-photo.png?alt=media&token=b0bd075e-2bd2-48c8-9cff-c448930ab8ba'}/>
                  <Grid>
                    <Typography className={classes.typography} variant="body1">
                      {post?.userInfo?.name}
                    </Typography>
                    <Typography className={classes.typography} variant="h6">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" className={classes.typography}>
                      {moment(post.created).fromNow()}
                    </Typography>
                    {post.tags.map((tag) => <span key={tag} className={`${classes.tag} ${classes[tag.replace(/\s/g, "")]}`}>{`${tag}!`}</span>)}
                  </Grid>
                  <IconButton aria-label="options" aria-controls="short-menu" aria-haspopup="true" onClick={(e) => {setAnchorEl(e.currentTarget);}} className={classes.fab}>
                    <MoreVert />
                  </IconButton>
                  <Menu id="short-menu" anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
                    {options.map((o) => (
                      <div key={o}>
                        <MenuItem className={classes.menuItem} onClick={(e) => {
                          handleMenuClose();
                          if (o === 'Share') setDialogOpen(true);
                          if (o === 'Delete Post') deletePost(post._id);
                          }}>
                          {o}
                        </MenuItem>
                        {o === 'Share' && <SharePost />}
                      </div>
                    ))}
                  </Menu>
                </Grid>
                {post.text.length >= 49 && readMore === false ?
                  <Typography variant="body1" paragraph={true} style={{padding: '1rem'}} onClick={onReadMore}>
                    {post.text.slice(0, 50)}  <MoreHorizIcon />
                  </Typography>
                  :
                  <Typography variant="body1" paragraph={true} style={{padding: '1rem'}} onClick={onReadMore}>
                    {post.text}
                  </Typography>
                  }
                    {post.location && (
                      <Hidden xsDown>
                        <Grid container justifyContent="center" align="center">
                        <div className="map" style={{padding: "10px"}}>
                          <RenderMap options={post.location}/>
                        </div>
                        </Grid>
                      </Hidden>
                    )}

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Grid className={classes.footer}>
                      <Typography variant="body2">
                        {`${post.commentId.length} comments`}
                      </Typography>
                    </Grid>
                  </AccordionSummary>
                    <AccordionDetails>
                      <Comments post={post} />
                    </AccordionDetails>
                </Accordion>
          </Card>
        </Container>
      </Hidden>
      <Hidden smUp>
        <Container style={{marginBottom: '2%'}}>
          <CssBaseline/>
          <Card style={{padding: '3%', width: '85vw'}}>
          <IconButton aria-label="options" aria-controls="short-menu" aria-haspopup="true" onClick={(e) => {setAnchorEl(e.currentTarget);}} className={classes.fab}>
            <MoreVert />
          </IconButton>
          <Menu id="short-menu" anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
            {options.map((o) => (
              <div key={o}>
                <MenuItem className={classes.menuItem} onClick={(e) => {
                  handleMenuClose();
                  if (o === 'Share') setDialogOpen(true);
                  if (o === 'Delete Post') deletePost(post._id);
                  }}>
                  {o}
                </MenuItem>
                {o === 'Share' && <SharePost />}
              </div>
            ))}
            </Menu>
            <Grid container justifyContent="center" alignItems="center" direction="column">
              <Grid item xs={10}>
                <Avatar alt="Neighbor" src={post?.userInfo?.picture || 'https://firebasestorage.googleapis.com/v0/b/neighbr-55334.appspot.com/o/no-photo.png?alt=media&token=b0bd075e-2bd2-48c8-9cff-c448930ab8ba'}/>
              </Grid>
              <Grid item xs={10}>
                <Typography className={classes.typography} variant="body1">
                  {post?.userInfo?.name}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography className={classes.typography} variant="h6">
                  {post.title}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                {post.text.length >= 49 && readMore === false ?
                  <Typography variant="body1" paragraph={true} style={{padding: '1rem'}} onClick={onReadMore}>
                    {post.text.slice(0, 50)}  <MoreHorizIcon />
                  </Typography>
                  :
                  <Typography variant="body1" paragraph={true} style={{padding: '1rem'}} onClick={onReadMore}>
                    {post.text}
                  </Typography>
                }
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2" className={classes.typography}>
                  {moment(post.created).fromNow()}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                {post.tags.map((tag) => <span key={tag} className={`${classes.tag} ${classes[tag.replace(/\s/g, "")]}`}>{`${tag}!`}</span>)}
              </Grid>
              <Grid item xs={10}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant="body2">
                      {`${post.commentId.length} comments`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Comments post={post} />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Card>
        </Container>

      </Hidden>
    </>
  );
};
