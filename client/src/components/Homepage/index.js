import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
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
import actions from '../../redux/actions/index';

const Homepage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const AUTH = useSelector(state => state.firebase);
  const location = useLocation();
  const userId = AUTH?.user?.uid;
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
    if (location.pathname === '/') {
      if (filters.length) {
        newPosts = await getPostWithTagFilter(filters);
      } else {
        newPosts = await getPosts();
      }
      dispatch({ type: 'SET_POSTS', payload: newPosts.data });
    } else if (location.pathname === '/profile') {
      if (filters.length) {
        dispatch(actions.getPostWithTagFilterByUserId(userId, filters));
      } else {
        dispatch(actions.getPostsByUserId(userId));
      }
    }
  }, [state]);

  const community = AUTH?.community;
  if (community === '') {
    return (
      <Redirect to="/community" />
    )
  }

  if (showPost) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} />
        <Grid item xs={12} md={8} style={{padding: '20px'}}>
          <Button className={classes.btn} variant="contained" onClick={() => setShowPost(false)}>Back</Button>
        </Grid>
        <Grid item xs={12} md={8} style={{padding: "10px"}}>
          <div className={classes.create}>
            <PostForm />
          </div>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container className={classes.mainContainer} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4} style={{padding: "20px"}}>
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
        <Grid item xs={12} md={4} style={{padding: '20px'}}>
          <Button className={classes.btn} variant="contained" onClick={() => setShowPost(true)}>Create Post</Button>
        </Grid>
        <Grid item md={4}/>
        <Grid container item xs={12} md={6} style={{padding: '20px'}}>
          <PostList className={classes.postList}  />
        </Grid>
      </Grid>
    )
  }
}

export default Homepage;