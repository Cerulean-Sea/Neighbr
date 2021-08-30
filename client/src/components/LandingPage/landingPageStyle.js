import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    fontSize: '7rem',
    fontWeight: 'bold',
    marginTop: '0'
  },
  subheader: {
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: 'url("./assets/landing-page-4.jpg")',
    backgroundSize: 'cover',
    height: '60vh',
    color: 'white',
    textShadow: '-1px 0 3px black, 0 1px 2px black, 1px 0 2px black, 0 -1px 7px black',
    paddingTop: '15vh'
  },
  topbar: {
    height: '4vh',
    backgroundColor: '#2A9D8F'
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
    backgroundColor: '#264653',
    '&:hover': {
      backgroundColor: '#2A9D8F'
    }
  }
});

export default useStyles;