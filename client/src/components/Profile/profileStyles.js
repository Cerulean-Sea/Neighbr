import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  profileImg: {
    height: '15vh',
    width: '15vh',
    borderRadius: '100%',
    marginTop: '5vh'
  },
  profileImgContainer: {
    textAlign: 'center'
  },
  profileImgTxt: {
    fontSize: '3vw',
    fontWeight: 'bold',
    marginTop: '3vh'
  },
  list: {
    backgroundColor: '#2A9D8F',
    borderRadius: '25px',
    boxShadow: '0 0 10px #264653',
  },
  infoContainer: {
    marginTop: '10vh',
    padding: '20px',

  },
  listItem: {
    '&:hover': {
      transform: 'scale(1.02)'
    }
  }
}));

export default useStyles;