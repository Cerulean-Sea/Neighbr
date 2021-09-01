import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../Posts/PostList';
import useStyles from './homePageStyles';
import {
  Button,
  Grid,
  FormControl,
  FormHelperText,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Switch
} from '@material-ui/core';
import PostForm from '../PostForm/PostForm.jsx';
import { getPostWithTagFilter, getPosts } from '../../api';

const Homepage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [showPost, setShowPost] = useState(false);
  const [state, setState] = React.useState({
    Happenings: false,
    Swaps: false,
    Safety: false,
    Favors: false,
    "Chit Chat": false
  });
  const tags = ["Happenings", "Swaps", "Safety", "Favors", "Chit Chat"]

  const handleChange = async (event) => {
    // event.target.checked = !event.target.checked;
    // let tempState = state;
    // tempState[event.target.name] = !state[event.target.name];
    // setState(tempState);

    setState({ ...state, [event.target.name]: event.target.checked})
  };

  useEffect(async () => {
    const filters = [];
    for (let tag in state) {
      if (state[tag]) {
        filters.push(tag);
      }
    }
    let newPosts;
    if (filters.length) {
      newPosts = await getPostWithTagFilter(filters);
    } else {
      newPosts = await getPosts();
    }
    dispatch({ type: 'SET_POSTS', payload: newPosts.data });
  }, [state]);

  if (showPost) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs />
        <Grid item xs={8}>
          <div className={classes.create}>
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
        <Grid item xs >
          <FormControl>
            <FormLabel component="feed-sort-by">Sort Feed</FormLabel>
            <FormGroup>
              {tags.map(tag => (
                <FormControlLabel
                  control={<Switch checked={state[tag]} onClick={handleChange} name={tag} />}
                  label={tag}
                  key={tag}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid container item xs={8}>
          <PostList className={classes.postList}  />
        </Grid>
        <Grid item xs>
          <Button className={classes.btn} variant="contained" onClick={() => setShowPost(true)}>Create Post</Button>
        </Grid>
      </Grid>
    )
  }
}

export default Homepage;