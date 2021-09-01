import React, { useState } from 'react';
import PostList from '../Posts/PostList';
import useStyles from './homePageStyles';
import { Button, Grid } from '@material-ui/core';
import PostForm from '../PostForm/PostForm.jsx';

const Homepage = (props) => {
  const classes = useStyles();
  const [showPost, setShowPost] = useState(false);
  if (showPost) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs />
        <Grid item xs={8}>
          <div classname={classes.create}>
            <PostForm />
          </div>
        </Grid>
        <Grid item xs>
          <Button className={classes.btn} variant="contained" onClick={() => setShowPost(false)}>Back</Button>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container className={classes.mainContainer}>
        <Grid item xs />
        <Grid item xs={8}>
          <PostList />
        </Grid>
        <Grid item xs>
          <Button className={classes.btn} variant="contained" onClick={() => setShowPost(true)}>Create Post</Button>
        </Grid>
      </Grid>
    )
  }
}

export default Homepage;