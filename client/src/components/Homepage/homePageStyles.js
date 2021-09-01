import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '20px'
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    fontSize: '1vw',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  create: {
    marginTop: '5vh',
    textAlign: 'center'
  },
  postList: {
    '& div': {
      minWidth: '90%'
    }
  },

}))

export default useStyles;