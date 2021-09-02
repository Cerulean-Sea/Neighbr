import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '20px'
  },
  postBtn: {
    position: 'absolute',
    top: '0%',
    right: '12%',
    zIndex:2000,

    backgroundColor: theme.palette.secondary.main,
    fontSize: '1vw',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  filterBtn: {
    position: 'absolute',
    top: '0%',
    right: '24%',
    zIndex:2000,

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
  filterFormHide: {
    position: 'absolute',
    left: '-100%',
    zIndex: 2000,
    transition: 'all 1s',
    backgoundColor: theme.palette.paper,
  },
  filterFormVisible: {
    position: 'absolute',
    left: '5%',
    zIndex: 2000,
    transition: 'all 1s',
    backgoundColor: theme.palette.paper,
  }

}))

export default useStyles;