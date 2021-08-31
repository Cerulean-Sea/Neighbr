import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    fontSize: 'min(10vw, 120px)',
    fontWeight: 'bold',
    marginTop: '0'
  },
  subheader: {
    fontSize: 'min(4vw, 34px)',
    fontWeight: 'bold'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: 'url("./assets/landing-page.jpg")',
    backgroundSize: 'cover',
    height: '55vh',
    color: 'white',
    textShadow: '-1px 0 3px black, 0 1px 2px black, 1px 0 2px black, 0 -1px 7px black',
    paddingTop: '15vh'
  },
  topbar: {
    height: '4vh',
    backgroundColor: '#2A9D8F',
    height: 'min-content',
    padding: '.5em'
  },
  avatar: {
    backgroundColor: '#264653',
    marginLeft: '1em'
  },
  body: {
    backgroundColor: '#2A9D8F',
    minHeight: '100vh',
    minWidth: '100vw'
  },
  btn: {
    marginRight: '1em',
    textDecoration: 'none',
    backgroundColor: '#264653',
    '&:hover': {
      backgroundColor: '#2A9D8F'
    }
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '25px'
  },
  icon: {
    fontSize: '10em',
    color: '#2A9D8F'
  },
  iconText: {
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  bottomHeader: {
    fontSize: 'min(3rem, 10vw)',
    paddingLeft: '10%'
  },
  aboutText: {
    width: '35%',
    fontSize: '1.2em'
  },
  container: {
    width: 'fit-content'
  }
});

export default useStyles;