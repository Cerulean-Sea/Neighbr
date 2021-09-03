import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Homepage from '../Homepage';
import useStyles from './profileStyles';
import { Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import ForumIcon from '@material-ui/icons/Forum';

function Profile() {
  const classes = useStyles();
  const AUTH = useSelector(state => state.firebase);
  const uid = AUTH?.user?.uid;

  const community = AUTH?.community;
  if (community === '') {
    return (
      <Redirect to="/settings" />
    )
  }


  const user = AUTH.user;

  return (
    <>
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        xs={12} md={6}
        item container
        className={classes.profileImgContainer}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <img src={user.photoURL} className={classes.profileImg}/>
      </Grid>
      <Grid item xs={12} md={6} className={classes.infoContainer}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Display Name"/>
            <ListItemText primary={user.displayName}/>
          </ListItem>
          <hr/>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email"/>
            <ListItemText primary={user.email}/>
          </ListItem>
          <hr/>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Community/Zipcode"/>
            <ListItemText primary={community}/>
          </ListItem>
        </List>
      </Grid>
    </Grid>
    <Homepage/>
    </>
  )
}

export default Profile;