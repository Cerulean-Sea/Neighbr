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
    backgroundColor: '#2A9D8F'
  },
  infoContainer: {
    marginTop: '10vh',
    boxShadow: '0 0 10px #264653'
  },
  listItem: {
    '&:hover': {
      transform: 'scale(1.04)'
    }
  }
}));

export default useStyles;