import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '20px'
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  create: {
    marginTop: '5vh',
    textAlign: 'center'
  }
}))

export default useStyles;