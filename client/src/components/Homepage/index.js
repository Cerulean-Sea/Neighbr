import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Redirect, Link } from 'react-router-dom';
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
  Hidden,
  Fab
} from '@material-ui/core';
import PostForm from '../PostForm/PostForm.jsx';
import AccountDropdown from '../AccountDropdown/AccountDropdown'
import { getPostWithTagFilter, getPosts } from '../../api';
import actions from '../../redux/actions/index';
import axios from 'axios';
import key from '../Chat/config';
import MessageIcon from '@material-ui/icons/Message';

const Homepage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const AUTH = useSelector(state => state.firebase);
  const location = useLocation();
  const userId = AUTH?.user?.uid;
  const showPost = useSelector((state) => state.ShowPost)
  const showFilter = useSelector((state) => state.ShowFilter)
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
    const data = await {
      "username": AUTH.user.email,
      "first_name": AUTH.user.displayName,
      "secret": 'password',
  }
    const config = await {
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: {
        'PRIVATE-KEY': key
      },
      data : data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [state]);

  const community = AUTH?.community;
  if (community === '') {
    return (
      <Redirect to="/community" />
    )
  }

    return (
      <>
      {showPost && (
        <Grid container className={classes.mainContainer} justifyContent="center" alignItems="center" direction="column">
          <Grid item>
            {showPost && <PostForm />}
          </Grid>
        </Grid>
      )}
        <Grid container className={`${classes.mainContainer} main-container`} alignItems="center" direction="column">
          {!showPost && (
            <>
            <Grid item>
              <FormControl
                className={showFilter ? classes.filterFormVisible : classes.filterFormHide}>
                <FormLabel component="feed-sort-by">Sort Feed</FormLabel>
                <FormGroup>
                  {tags.map(tag => (
                    <FormControlLabel
                      control={<Switch checked={state[tag]} onClick={handleChange} name={tag} className={classes.switch}/>}
                      label={tag}
                      key={tag}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item className="post-container" xs={12} sm={12} md={12} lg={12} xl={12}>
              <PostList filterState={state} className={classes.postList}/>
            </Grid>
            <Grid item></Grid>
            </>
          )}
        </Grid>
        <Hidden xsDown>
          <Link to="/chat">
            <Fab color="primary" aria-label="add" className={classes.fab}>
              <MessageIcon />
            </Fab>
          </Link>
        </Hidden>
      </>
    )
  }

export default Homepage;