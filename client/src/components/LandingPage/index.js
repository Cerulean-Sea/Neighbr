import React from 'react';
import useStyles from './landingPageStyle';
import { Avatar, Grid, CssBaseline, Button } from '@material-ui/core';
// import logo from '../../assets/logo.png';


const LandingPage = (props) => {
const classes = useStyles();



  return (
    <div>
      <CssBaseline />
      <Grid
        className={classes.topbar}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar className={classes.avatar} src='./assets/logo.png' />
        <Button className={classes.btn} variant="contained" color="primary">Log in</Button>
      </Grid>
      <div className={classes.center}>
        <h1 className={classes.header}>Neighbr™</h1>
        <h2 className={classes.subheader}>A Platform For Community, Driven By Community</h2>
      </div>
    </div>
  )
}

export default LandingPage;