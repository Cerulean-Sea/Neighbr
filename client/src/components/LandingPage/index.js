import React from 'react';
import useStyles from './landingPageStyle';
import { Avatar, Grid, CssBaseline, Button } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ForumIcon from '@material-ui/icons/Forum';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


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
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{paddingTop: '20px', paddingBottom: '20px'}}
        >
          <h2 className={classes.bottomHeader}>What is Neighbr?</h2>
          <div className={classes.aboutText}>
            <p>Neighbr is a community forum driven by the community itself. Have you ever found yourself in a situation where you are almost done mixing the batter for your world-famous Chocolate-Glazed Boston Cream Whoopie Pies but—<b>OH NO!</b>—you're missing that last cup of flour? Or your pet chinchilla "Randy" has run away in the middle of the night and you need help finding him? Or even simply wanted to get rid of your old rubber band ball you've had in your desk drawer since 1957?</p>
            <p><em>Neighbr seeks to help solve these problems.</em> With Neighbr, you can connect with your fellow community members to post alerts on happenings around town, sell used items, ask for help when needed, or simply to chat with those closest around you in an open, welcoming forum</p>
          </div>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <div className={classes.iconContainer}>
            <PersonPinCircleIcon className={classes.icon} />
            <span className={classes.iconText}>Local People</span>
          </div>
          <div className={classes.iconContainer}>
            <ForumIcon className={classes.icon} />
            <span className={classes.iconText}>Start Conversations</span>
          </div>
          <div className={classes.iconContainer}>
            <LiveHelpIcon className={classes.icon} />
            <span className={classes.iconText}>Ask For Help</span>
          </div>
          <div className={classes.iconContainer}>
            <MonetizationOnIcon className={classes.icon} />
            <span className={classes.iconText}>Sell Your Items</span>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default LandingPage;