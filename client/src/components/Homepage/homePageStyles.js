import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '20px'
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    },
    margin: '0 auto',
    display: 'flex'
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