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
  Switch,
  Hidden
} from '@material-ui/core';
import PostForm from '../PostForm/PostForm.jsx';
import AccountDropdown from '../AccountDropdown/AccountDropdown'
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
  const [showFilter, setShowFilter] = useState(false);
  const [state, setState] = useState({
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

    return (
      <>
      <AccountDropdown showPost={showPost} setShowPost={setShowPost}/>
        <Grid container className={classes.mainContainer}>
            <FormControl className={classes.filterForm}>
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
          {showPost ? <PostForm /> : <PostList className={classes.postList}/>}
          <Hidden xsDown>
            <Button className={classes.postBtn} variant="contained" onClick={() => setShowPost(!showPost)}>{showPost ? "View Feed" : "Create Post"}</Button>
            <Button className={classes.filterBtn} variant="contained" onClick={() => setShowFilter(!showFilter)}>{showFilter ? "Hide Filters" : "Show Filters"}</Button>
          </Hidden>
        </Grid>
      </>
    )
  }
// }

export default Homepage;