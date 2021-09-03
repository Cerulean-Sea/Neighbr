import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingTop: '20px',
    overflowX: 'hidden',
    minWidth: '100vw',
    backgroundColor: '#2a9d8f4f',
    minHeight: '94.4vh'
  },
  postBtn: {
    position: 'absolute',
    marginTop: '10px',
    top: '0%',
    right: '20%',
    zIndex:2000,

    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  filterBtn: {
    position: 'absolute',
    marginTop: '10px',
    top: '0%',
    right: '30%',
    zIndex:2000,

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
  filterFormHide: {
    position: 'absolute',
    top: '20%',
    left: '-100%',
    zIndex: 2000,
    transition: 'all 1s',
    backgoundColor: theme.palette.primary.main,
  },
  filterFormVisible: {
    position: 'absolute',
    top: '20%',
    margin: 0,
    padding:'15px',
    borderRadius: '0px 5px 5px 0px',
    left: '5%',
    zIndex: 2000,
    transition: 'all 1s',
    backgroundColor: theme.background.default,
    boxShadow: theme.shadows[3]
  },
  switch: {
    '& .MuiSwitch-track': {
        backgroundColor:'#E76F51'
    }
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  }

}))

export default useStyles;